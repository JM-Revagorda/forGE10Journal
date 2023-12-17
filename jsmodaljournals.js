//Thanks to DSONESUK for creating this script below!!

        // Get the modal

        var modalparent = document.getElementsByClassName("modal");

        // Get the button that opens the modal

        var modal_btn_multi = document.getElementsByClassName("journal_temp");

        // Get the <span> element that closes the modal
        var span_close_multi = document.getElementsByClassName("close");

        // When the user clicks the button, open the modal
        function setDataIndex() {

            for (i = 0; i < modal_btn_multi.length; i++)
            {
                modal_btn_multi[i].setAttribute('data-index', i);
                modalparent[i].setAttribute('data-index', i);
                span_close_multi[i].setAttribute('data-index', i);
            }
        }



        for (i = 0; i < modal_btn_multi.length; i++)
        {
            modal_btn_multi[i].onclick = function() {
                var ElementIndex = this.getAttribute('data-index');
                modalparent[ElementIndex].style.display = "block";
            };

            // When the user clicks on <span> (x), close the modal
            span_close_multi[i].onclick = function() {
                var ElementIndex = this.getAttribute('data-index');
                modalparent[ElementIndex].style.display = "none";
            };

        }

        window.onload = function() {

            setDataIndex();
        };

        window.onclick = function(event) {
            if (event.target === modalparent[event.target.getAttribute('data-index')]) {
                modalparent[event.target.getAttribute('data-index')].style.display = "none";
            }
            // OLD CODE
                     if (event.target === modal) {
                modal.style.display = "none";
            }
        };

        //My testing code:
        //
        // var fullentry;
        // const modal = document.getElementsByClassName("modal")[0];
        // const content = document.getElementsByClassName("hid_journal_temp")[0];


        // for (var i = 0; i < btns.length; i++) {
        // btns[i].addEventListener("click", function() {
        // var current = document.getElementsByClassName("active");
        // current[0].className = current[0].className.replace(" active", "");
        // this.className += " active";
        // });
        // }

        // 
        // 
        //

        // function fentry1(){
        //     fullentry = document.getElementById("fullentry1");

        //     document.getElementById("entry1").onclick = function() {
        //         modal.style.display = "block";
        //         fullentry.style.display = "block";
        //         content
        //     };
        // }

        // window.onclick = function(event) {
        //     if(event.target == modal){
        //         modal.style.display = "none";
        //         fullentry.style.display = "none";
        //     }
        // };
            