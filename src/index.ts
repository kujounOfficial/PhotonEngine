import {Renderer} from "./renderer.js";
import {MainPipeline} from "./pipelines/main_pipeline.js";

async function main(): Promise<void> {
    const renderer = new Renderer();
    const canvas = document.getElementById("gpuCanvas") as HTMLCanvasElement;

    await renderer.init(canvas);

    const pipeline = new MainPipeline(renderer.webgpu_manager.device, renderer.webgpu_manager.format);

    function render() {
        let device = renderer.webgpu_manager.device;

        const vertices = new Float32Array([
            // x, y, z,    r, g, b
            0.0,  0.5, 0,   1, 0, 0,
            -0.5, -0.5, 0,   0, 1, 0,
            0.5, -0.5, 0,   0, 0, 1,
        ]);

        const vertexBuffer = device.createBuffer({
            size: vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
        });
        device.queue.writeBuffer(vertexBuffer, 0, vertices);

        pipeline.render(device, renderer.webgpu_manager.context, vertexBuffer);
    }

    renderer.registerRenderEvent(render);

    renderer.run();
}

main();
