/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Translations mapper class.
 */
@Injection.Describe({ singleton: true, name: 'translations' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Load the translation that corresponds to the specified translation Id.
   * @param id Translation Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the translation entity.
   * @throws Throws an error when the translation wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Update the translation that corresponds to the specified translation Id based on the given update request.
   * @param id Translation Id.
   * @param request Translation update request.
   * @returns Returns a promise to get true when the translation was updated, false otherwise.
   * @throws Throws an error when the translation wasn't found.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * List all translations that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the translation.
   * @throws Throws an error when the response isn't as expected.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[]> {
    const list = await this.mapper.find(query, fields);
    if (list == void 0) {
      if (this.error !== void 0) {
        throw new Error(this.error.text);
      }
      return [];
    }
    return list;
  }

  /**
   * Count all translations that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of translations.
   * @throws Throws an error when the response isn't as expected.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number> {
    const total = await this.mapper.count(query);
    if (total == void 0) {
      if (this.error !== void 0) {
        throw new Error(this.error.text);
      }
      return 0;
    }
    return total;
  }
}
