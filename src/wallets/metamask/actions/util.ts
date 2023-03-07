import { Page } from 'playwright-core';
import { EXTENSION_ID } from '../setup/downloader';

export const performPopupAction = async (page: Page, action: (popup: Page) => Promise<void>): Promise<void> => {
  let popup = null;
  let pages = page.context().pages();
  for(let i=pages.length-1;i>=0;i--){
    let p = pages[i]
    if(p.url().includes(EXTENSION_ID+"/notification.html")){
      popup = p;
      break;
    }
  }
  if(!popup){
    popup = await page.context().waitForEvent('page'); // Wait for the popup to show up
  }

  await action(popup);
  if (!popup.isClosed()) 
  {
    try{
      await popup.waitForEvent('close', { timeout: 10000 });
    } catch(e){
      console.log("Popup maybe not closed correctly")
    }
  }

};
