export class WebGPUManager {
    public device!: GPUDevice;
    public context!: GPUCanvasContext;
    public format!: GPUTextureFormat;

    constructor() {}

    public async init(canvas: HTMLCanvasElement): Promise<void> {
        if (!navigator.gpu) throw new Error('WebGPU not supported');

        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) throw new Error('Could not find GPU adapter');

        this.device = await adapter.requestDevice();
        this.format = navigator.gpu.getPreferredCanvasFormat();

        this.context = canvas.getContext('webgpu') as GPUCanvasContext;
        this.context.configure({
            device: this.device,
            format: this.format,
            alphaMode: 'opaque',
        });
    }
}