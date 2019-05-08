/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Translations update request.
 */
export declare class Update extends Class.Null {
    /**
     * Translation content.
     */
    content: RestDB.Map<any>;
}
