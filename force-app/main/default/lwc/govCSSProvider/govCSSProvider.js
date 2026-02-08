/**
 * Component Name: Gov UK CSS Provider
 * Derived_From_Frontend_Version:v3.13.1
 * Created by: Neetesh Jain/Harshpreet Singh Chhabra
 * Updated: Scottish Power brand override added
 **/
import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import govCssStyle from '@salesforce/resourceUrl/govukcss';
import scottishPowerOverride from '@salesforce/resourceUrl/scottishpoweroverride';

let cssStylesLoaded = false;

export default class GovCSSProvider extends LightningElement {

    constructor() {
        super();
        if (cssStylesLoaded === true) {
            return;
        }
        cssStylesLoaded = true;
        loadStyle(this, govCssStyle)
        .then(() => {
            console.log('GDS CSS loaded.');
            return loadStyle(this, scottishPowerOverride);
        })
        .then(() => console.log('Scottish Power override CSS loaded.'))
        .catch(error => console.log("Error " + error.body.message));
    }

}