import { Locator, Page } from '@playwright/test';
import { config } from '../config/config';
import { AsyncLocalStorage } from 'node:async_hooks';
import { Logger } from "../utils/Logger";


export class ProductsPage {

    private page: Page;



    constructor(page: Page) {
        this.page = page;
    }



}