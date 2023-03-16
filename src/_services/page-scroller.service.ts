/*#region svelte imports*/
import { writable, type Writable } from 'svelte/store';
/*#endregion*/
class PageScrollerService {
    public _pageNumber: Writable<number>;
    private maxPage = 1; 
    public _scrollerActiv = writable(true);
    constructor() {
        this._pageNumber = writable(0);
    }    
    /**
     * setPageScroller
     */
    public scrollTo( nextPage : boolean) {
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


    /**
     * setScrollerActiv
     * @param activ
     */
    public setScrollerActiv(activ: boolean) {
        this._scrollerActiv.set(activ);
    }

}

export const pageScrollerService = new PageScrollerService();