import React, { useEffect } from 'react';

import $ from 'jquery'; // Import jQuery

function Costume() {
    useEffect(() => {
        function getYear() {
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            document.querySelector("#displayYear").innerHTML = currentYear;
        }
        getYear();

        $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 6
                    }
                }
            });
        });
    }, []); // Run once on component mount

    return (
        <div>
            <div id="displayYear"></div>
            <div className="owl-carousel">
                {/* Your carousel items go here */}
            </div>
        </div>
    );
}

export default Costume

