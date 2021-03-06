import {$} from '@core/dom';
import {PageStart} from '@/components/pagestart/PageStart';
import {PageWork} from '@/components/pagework/PageWork';
import {PageEnd} from '@/components/pageend/PageEnd';
import {QuizBase} from '@core/QuizBase';

export class App {
  constructor(selector, data) {
    this.$root = $(selector);
    this.pages = [PageStart, PageWork, PageEnd];
    this.indexCurrentPage = 0;
    this.currentPage = null;
    this.quiz = new QuizBase(data);
    window.handlerNextPage = this.handlerNextPage.bind(this);
  }

  handlerNextPage() {
    if (this.indexCurrentPage < this.pages.length - 1) {
      this.indexCurrentPage++;
      this.currentPage.destroy();
      this.$root.clear();
      this.render();
    }
  }

  render() {
    const PageName = this.pages[this.indexCurrentPage];
    const page = new PageName(this.$root, this.quiz);
    this.currentPage = page;
    page.render();
  }
}
