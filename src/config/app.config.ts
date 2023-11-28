import { registerAs } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  nodenv: process.env.NODE_ENV,
  namingStrategy: new SnakeNamingStrategy(), 
}));