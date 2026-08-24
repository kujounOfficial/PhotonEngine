import { shader } from "../shaders/shader.js";
export class MainPipeline {
    pipeline;
    constructor(device, format) {
        const module = device.createShaderModule({ code: shader });
        const vertexBufferLayout = {
            arrayStride: 6 * 4,
            attributes: [
                { shaderLocation: 0, offset: 0, format: 'float32x3' },
                { shaderLocation: 1, offset: 3 * 4, format: 'float32x3' },
            ],
        };
        this.pipeline = device.createRenderPipeline({
            layout: 'auto',
            vertex: {
                module: module,
                entryPoint: 'vs_main',
                buffers: [vertexBufferLayout],
            },
            fragment: {
                module: module,
                entryPoint: 'fs_main',
                targets: [{ format }],
            },
            primitive: { topology: 'triangle-list' },
        });
    }
    render(device, context, vertexBuffer) {
        const encoder = device.createCommandEncoder();
        const pass = encoder.beginRenderPass({
            colorAttachments: [{
                    view: context.getCurrentTexture().createView(),
                    clearValue: { r: 0, g: 0, b: 0, a: 1 },
                    loadOp: 'clear',
                    storeOp: 'store',
                }],
        });
        pass.setPipeline(this.pipeline);
        pass.setVertexBuffer(0, vertexBuffer);
        pass.draw(3);
        pass.end();
        device.queue.submit([encoder.finish()]);
    }
}
