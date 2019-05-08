/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Translation entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Translation Id.
     */
    id: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Language priority.
     */
    priority: number;
    /**
     * Language code.
     */
    languageCode: string;
    /**
     * Section name.
     */
    section: string;
    /**
     * Translation content.
     */
    content: RestDB.Map<any>;
}
