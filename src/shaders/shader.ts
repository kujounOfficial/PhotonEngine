export const shader: string = "struct VertexOut {\n" +
    "  @builtin(position) pos: vec4<f32>,\n" +
    "  @location(0) color: vec3<f32>,\n" +
    "};\n" +
    "\n" +
    "@vertex\n" +
    "fn vs_main(@location(0) position: vec3<f32>, @location(1) color: vec3<f32>) -> VertexOut {\n" +
    "  var out: VertexOut;\n" +
    "  out.pos = vec4<f32>(position, 1.0);\n" +
    "  out.color = color;\n" +
    "  return out;\n" +
    "}\n" +
    "\n" +
    "@fragment\n" +
    "fn fs_main(in: VertexOut) -> @location(0) vec4<f32> {\n" +
    "  return vec4<f32>(in.color, 1.0);\n" +
    "}";