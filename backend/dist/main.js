"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./helpers/validation.pipe");
const validationExeptionFilter_1 = require("./helpers/validationExeptionFilter");
async function bootstrap() {
    const PORT = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.useGlobalFilters(new validationExeptionFilter_1.ValidationExceptionFilter());
    await app.listen(PORT, () => console.log(`Server is working on Port: ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map