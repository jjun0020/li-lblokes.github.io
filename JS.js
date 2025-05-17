// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}

class GalleryFilter {
        filtersSelector = ".cs-button";
        imagesSelector = ".cs-listing";
        activeClass = "cs-active";
        hiddenClass = "cs-hidden";

        constructor() {
            const $filters = document.querySelectorAll(this.filtersSelector);
            this.$activeFilter = $filters[0];
            this.$images = document.querySelectorAll(this.imagesSelector);

            this.$activeFilter.classList.add(this.activeClass);

            for (const $filter of $filters) {
                $filter.addEventListener("click", () => this.onClick($filter));
            }
        }

        onClick($filter) {
            this.filter($filter.dataset.filter);

            const { activeClass } = this;

            this.$activeFilter.classList.remove(activeClass);
            $filter.classList.add(activeClass);

            this.$activeFilter = $filter;
        }

        filter(filter) {
            const showAll = filter == "all";
            const { hiddenClass } = this;

            for (const $image of this.$images) {
                const show = showAll || $image.dataset.category == filter;
                $image.classList.toggle(hiddenClass, !show);
            }
        }
    }

    new GalleryFilter();

    /* This is for the zoom in zoom out effect*/

    Fancybox.bind( "[data-fancybox = 'gallery']" );
                                