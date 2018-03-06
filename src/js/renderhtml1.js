export function renderhtml1()
{
var text = `<form class="example"><a class="waves-effect waves-light btn" id="home">Return Home</a></form><div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">collections</i>
    </a>
    <ul>
      <li><a class="btn-floating red modal-trigger" id="adder1" href="#modal1"><i class="material-icons">add</i></a></li>
      <li><a class="btn-floating yellow modal-trigger darken-1" href="#modal2"><i class="material-icons">delete</i></a></li>
      <li><a class="btn-floating green modal-trigger" href="#modal3"><i class="material-icons">edit</i></a></li>
    </ul>
  </div>`;

  return text;
}