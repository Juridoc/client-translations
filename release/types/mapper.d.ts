/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Translations mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the translation that corresponds to the specified translation Id.
     * @param id Translation Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the translation entity.
     * @throws Throws an error when the translation wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the translation that corresponds to the specified translation Id based on the given update request.
     * @param id Translation Id.
     * @param request Translation update request.
     * @returns Returns a promise to get true when the translation was updated, false otherwise.
     * @throws Throws an error when the translation wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * List all translations that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the translation.
     * @throws Throws an error when the response isn't as expected.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[]>;
    /**
     * Count all translations that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of translations.
     * @throws Throws an error when the response isn't as expected.
     */
    count(query: RestDB.Query): Promise<number>;
}
