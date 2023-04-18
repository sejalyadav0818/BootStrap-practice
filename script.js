var modelWrap = null;
const showModal = ()=>{

    if(modelWrap !== null)
    {
        modelWrap.remove();
    }
    modelWrap = document.createElement('div');
    modelWrap.innerHTML = `
    <div class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

document.body.append(modelWrap);
var modal = new bootstrap.Modal(modelWrap.querySelector('.modal'));
modal.show();
}



// model for question page 
// modelWrap - modelwrapcard
// showquestioncard - showModal
var  modelwrapcard = null;
const showquestioncard  = ()=>{

    if( modelwrapcard !== null)
    {
         modelwrapcard.remove();
    }
     modelwrapcard = document.createElement('div');
     modelwrapcard.innerHTML = `
    <div class="card  ">
    <div class="card-header">Question- 1 </div>
    <div class="card-body">  
      <p class="card-text">
    What is the implicit return type of constructor?
    </p>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
        <label class="form-check-label" for="flexRadioDisabled">
          No return Type
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
        <label class="form-check-label" for="flexRadioDisabled">
          None
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
        <label class="form-check-label" for="flexRadioDisabled">
        void
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
        <label class="form-check-label" for="flexRadioCheckedDisabled">
            A class object  in which it is defined.
        </label>
      </div>
  
    </div>
    <div class="card-footer">Your answer : None </div>
    <div class="card-footer">Right answer : A class object  in which it is defined. </div>
  </div>
  
    </div>
  </div>`;

document.body.append( modelwrapcard);
var modal = new bootstrap.Modal( modelwrapcard.querySelector('.modal'));
modal.show();
}
