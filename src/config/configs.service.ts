import { Logger } from '@nestjs/common'
import { parse } from 'dotenv'
import { readFileSync } from 'fs'
import * as joi from 'joi'

export class ConfigsService {
  private configData
  private readonly logger = new Logger(ConfigsService.name)
  constructor() {
    const nodeEnv = process.env.NODE_ENV ?? 'development'
    const configData: any = process.env
    configData.NODE_ENV = nodeEnv
    this.configData = this.validateConfigData(configData)
    this.logger.log('🚀 - file: configs.service.ts - line 14 - configData validated')
  }

  private validateConfigData(config) {
    const schema = joi
      .object({
        NODE_ENV: joi
          .string()
          .valid(...['development', 'production', 'staging', 'test'])
          .default('development')
          .required(),
        REDIS_HOST: joi.string().required(),
        REDIS_PORT: joi.number().required(),
        POSTGRES_DB: joi.string().required(),
        POSTGRES_USER: joi.string().required(),
        POSTGRES_PASSWORD: joi.string().required(),
        DATABASE_URL: joi.string().required()
      })
      .unknown(true)
    const { error, value: validConfigData } = schema.validate(config)

    if (error) {
      throw new Error(`Config validation error: ${error.message}`)
    }

    return validConfigData
  }

  get databaseConfig(): object {
    const dbConfig = {
      database: String(this.configData.POSTGRES_DB),
      user: String(this.configData.POSTGRES_USER),
      password: String(this.configData.POSTGRES_PASSWORD),
      database_url: String(this.configData.DATABASE_URL)
    }
    return Object(dbConfig)
  }
  get nodeEnv() {
    return this.configData.NODE_ENV
  }
  get redisHost(): string {
    return String(this.configData.REDIS_HOST)
  }

  get redisPort(): number {
    return Number(this.configData.REDIS_PORT)
  }
}
