import { useEffect } from "react";

const MIN_MOUSE_DIST = 65;
const DOT_RADIUS = 1;
const DOT_DIAMETER = DOT_RADIUS * 2;
const LINE_DISTANCE = 75;
const MIN_DOT_SPEED = 0.15;
const MAX_DOT_SPEED = 0.45;

let mouse_x = Number.MIN_SAFE_INTEGER;
let mouse_y = Number.MIN_SAFE_INTEGER;
let canvas_id = null

export function set_mouse_position(e) {
    if (canvas_id !== null) {
        const BOUNDING_BOX = document.getElementById(canvas_id).getBoundingClientRect();
        mouse_x = e.clientX - BOUNDING_BOX.left;
        mouse_y = e.clientY - BOUNDING_BOX.top;
    }
}

export default function HeaderBackground({id, dot_count, classes}) {
    canvas_id = id;

    // a function to initialize the canvas drawing loop
    useEffect(() => {
        // creates canvas
        const canvas = document.getElementById(id);
        const ctx = canvas.getContext('2d');
        set_canvas_width(canvas);
        
        const dots = [];

        // adds dots
        for (let i = 0; i < dot_count; i++) {
            dots[i] = rand_dot(canvas.width, canvas.height, MIN_DOT_SPEED, MAX_DOT_SPEED);
        }

        // update function
        const update = () => {
            // updates canvas
            set_canvas_width(canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // moves each dot
            dots.forEach((dot) => {
                // moves the dot
                dot.x += dot.dx;
                dot.y += dot.dy;

                const mouse_dist = point_distance(mouse_x, mouse_y, dot.x, dot.y);

                // reacts to mouse
                if (mouse_dist < MIN_MOUSE_DIST) {
                    const mouse_angle = point_angle(mouse_x, mouse_y, dot.x, dot.y);

                    dot.x += (MIN_MOUSE_DIST - mouse_dist) * Math.cos(mouse_angle);
                    dot.y += (MIN_MOUSE_DIST - mouse_dist) * Math.sin(mouse_angle);
                }

                // wraps dots around the outside
                if (dot.x < -DOT_DIAMETER) {
                    dot.x = canvas.width + DOT_RADIUS;
                } else if (dot.x > canvas.width + DOT_DIAMETER) {
                    dot.x = -DOT_RADIUS;
                }

                if (dot.y < -DOT_DIAMETER) {
                    dot.y = canvas.height + DOT_RADIUS;
                } else if (dot.y > canvas.height + DOT_DIAMETER) {
                    dot.y = -DOT_RADIUS;
                }
            });

            // draws lines between dots
            for (let i = 0; i < dots.length; i++) {
                const dot_1 = dots[i];

                for (let j = i + 1; j < dots.length; j++) {
                    const dot_2 = dots[j];
                    
                    const dist = point_distance(dot_1.x, dot_1.y, dot_2.x, dot_2.y);

                    if (dist < LINE_DISTANCE) {
                        // draws a line
                        ctx.beginPath();
                        ctx.moveTo(dot_1.x, dot_1.y);
                        ctx.lineTo(dot_2.x, dot_2.y);
                        ctx.strokeStyle = `rgba(255,0,0,${(LINE_DISTANCE - dist) / LINE_DISTANCE})`;
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }

            // draws each dot
            dots.forEach((dot) => {
                // draws the dot
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.closePath();
            });

            // continues the update loop
            requestAnimationFrame(update);
        };

        // starts the update loop
        update();
    }, []);

    return (
        <canvas
            id={id}
            className={classes}
            onMouseMove={set_mouse_position}
        />
    );
}

const set_canvas_width = (canvas) => {
    const BOUNDING_BOX = canvas.getBoundingClientRect();
    canvas.width = BOUNDING_BOX.width;
    canvas.height = BOUNDING_BOX.height;
}

function point_distance(x1, y1, x2, y2) {
    const x_dist = x2 - x1;
    const y_dist = y2 - y1;

    return Math.sqrt(x_dist * x_dist + y_dist * y_dist);
}

function point_angle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}

function rand_dot(width, height, min_v, max_v) {
    const angle = Math.random() * 2 * Math.PI;
    const v = min_v + Math.random() * (max_v - min_v);

    return {
        x: Math.random() * width,
        y: Math.random() * height,
        dx: v * Math.cos(angle),
        dy: v * Math.sin(angle),
    }
}