export class WebGPUManager {
    device;
    context;
    format;
    constructor() { }
    async init(canvas) {
        if (!navigator.gpu)
            throw new Error('WebGPU not supported');
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter)
            throw new Error('Could not find GPU adapter');
        this.device = await adapter.requestDevice();
        this.format = navigator.gpu.getPreferredCanvasFormat();
        this.context = canvas.getContext('webgpu');
        this.context.configure({
            device: this.device,
            format: this.format,
            alphaMode: 'opaque',
        });
    }
}
