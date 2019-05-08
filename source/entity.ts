/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Translation entity class.
 */
@RestDB.Schema.Entity('translations')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Translation Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Language priority.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public priority!: number;

  /**
   * Language code.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public languageCode!: string;

  /**
   * Section name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public section!: string;

  /**
   * Translation content.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Object)
  @Class.Public()
  public content!: RestDB.Map<any>;
}
