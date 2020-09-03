import React from 'react';
import { searchFields } from '../utils/shared';
import './style.scss';

const SearchFilter = ({ handleAdvancedFilter }) => {
  return (
    <div className="advancedFilterContainer">
      {
        searchFields.map(field =>
          <div>
            <label>
              {field.label}
            </label>
            <input key={field.key} className="advancedFilterInput" placeholder={field.placeholder} onChange={(event) => handleAdvancedFilter(field.key, event)} />
          </div>
        )
      }

    </div>
  )
}


export default SearchFilter;