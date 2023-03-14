/*#region svelte imports*/
import { writable, type Writable } from 'svelte/store';
/*#endregion*/
class PageScrollerService {
    public _pageNumber: Writable<number>;
    private maxPage = 1; 
    constructor() {
        this._pageNumber = writable(0);
    }    
    /**
     * setPageScroller
     */
    public scrollTo( nextPage : boolean) {
        alert("scroll" + nextPage)
        this._pageNumber.update( (page) => {
            if (nextPage) {
                if (page < this.maxPage) {
                    page++;
                }
            } else {
                if (page > 0) {
                    page--;
                }
            }
            return page;
        });
    }

}

export const pageScrollerService = new PageScrollerService();