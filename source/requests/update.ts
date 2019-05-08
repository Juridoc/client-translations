/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Translations update request.
 */
@RestDB.Schema.Entity('translations/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Translation content.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public content!: RestDB.Map<any>;
}
