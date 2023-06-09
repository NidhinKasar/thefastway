import React from 'react'

function FilterModal() {
  return (
   
    <div className="modal" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Filter</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
                      <form>
                          <input
                            type='text'

                          
                          />
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary"  >Apply Filter</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FilterModal