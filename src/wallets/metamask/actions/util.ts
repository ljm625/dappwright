import { Page } from 'playwright-core';
import { EXTENSION_ID } from '../setup/downloader';

export const performPopupAction = async (page: Page, action: (popup: Page) => Promise<void>): Promise<void> => {
  let popup = null;
  try{
    popup = await page.context().waitForEvent('page', { timeout: 5000 }); // Wait for the popup to show up
  } catch(e){
    console.log(e)
    console.log("Failed to get a popup. let's see if it already pops")
    let pages = page.context().pages();
    for(let i=pages.length-1;i>=0;i--){
      let p = pages[i]
      if(p.url().includes(EXTENSION_ID+"/notification.html")){
        popup = p;
        break;
      }
    }
    if(!popup){
      throw Error("Metamask Cannot find popup page")
    }
  }

  await action(popup);
  if (!popup.isClosed()) 
  {
    try{
      await popup.waitForEvent('close', { timeout: 5000 });
    } catch(e){
      console.log("Popup maybe not closed correctly")
    }
  }

};
