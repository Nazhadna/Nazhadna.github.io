function setColour() {
    rows = document.getElementById("tbl").getElementsByTagName("tr");
    for(var countRow = 0; countRow<rows.length; countRow++) {
        if ((countRow + 1) % 2 == 0)
            rows[countRow].classList.add('firstRow');
        else
            rows[countRow].classList.add('secondRow');
    }
}
function deleteRow() {
    this.parentElement.removeChild(this);
    setColour();
}

function square_equation() {
    var a = document.getElementById("square_a").value;
    var b = document.getElementById("square_b").value;
    var c = document.getElementById("square_c").value;
    var wrn = document.getElementById("warning");

    if (wrn.childNodes.length > 1)
        wrn.removeChild(wrn.childNodes[1]);

    if (!Number.isFinite(+a) || !Number.isFinite(+b) || !Number.isFinite(+c))
    {
        txt = "Некорректный ввод!";
        var t = document.createTextNode(txt);
        wrn.appendChild(t);
    }
    else if (a==0 && b==0)
    {
        txt = "Не введены значения параметров!";
        var t = document.createTextNode(txt);
        wrn.appendChild(t);
    }
    else
    {
        if (a == 0)
        {
            x2 = Math.round((-c/b)*1000)/1000;
            x1 = "-";
        }
        else {
            var d = b * b - 4 * a * c;
            if ( d < 0 ) {
                x1 = "(" + Math.round((- b / ( 2 * a ))*1000)/1000 + ", " + Math.round((Math.sqrt( -d ) / ( 2 * a ))*1000)/1000 + ")";
                x2 = "(" + Math.round((- b / ( 2 * a ))*1000)/1000 + ", " + Math.round((-Math.sqrt( -d ) / ( 2 * a ))*1000)/1000 + ")";
            } else {
                if ( d == 0 ) {
                    x1 = Math.round((- b / ( 2 * a ))*1000)/1000 ;
                    x2 = Math.round((- b / ( 2 * a ))*1000)/1000 ;
                } else {
                    x1 = Math.round((-b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a ))*1000)/1000;
                    x2 = Math.round((-b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a ))*1000)/1000;
                }
            }
        }

        var table = document.getElementById("tbl");
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var t1 = document.createTextNode(x1);
        var t2 = document.createTextNode(x2);
        td1.appendChild(t1);
        td2.appendChild(t2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
        setColour();
        tr.addEventListener("click", deleteRow);
    }
}

function block_writing() {
    if (document.getElementById("square_a").disabled)
    {
        document.getElementById("square_a").disabled = false;
        document.getElementById("square_b").disabled = false;
        document.getElementById("square_c").disabled = false;
        document.getElementById("square_sol").disabled = false;
    }
    else {
        document.getElementById("square_a").disabled = true;
        document.getElementById("square_b").disabled = true;
        document.getElementById("square_c").disabled = true;
        document.getElementById("square_sol").disabled = true;
    }
} 
