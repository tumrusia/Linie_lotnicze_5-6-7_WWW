import {Builder, Capabilities} from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from 'mocha-webdriver';

describe('test', () => {
    it('should say something', async function() {
        this.timeout(20000);
        await driver.get('file:///home/marta/Studia/WWW_AplikacjeWWW/Linie_lotnicze_5-6-7_WWW/index.html');

        await driver.find('input[type=text]').sendKeys('Jan Woreczko');
        await driver.find('input[type=reset]').doClick();
    });
})

describe('testLot', () => {
    it('should say something', async function() {
        this.timeout(20000);
        await driver.get('file:///home/marta/Studia/WWW_AplikacjeWWW/Linie_lotnicze_5-6-7_WWW/lot1.html');

        expect(await driver.find('.dokad').getText()).to.include('Rzym');
    });
})