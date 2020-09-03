import React, { useState, useEffect } from "react";
import CongressList from "../components/CongressList";
import ButtonsList from "../components/ButtonsList";
import SearchFilter from "../components/SearchFilter";
import { requestObj, searchFields, handleGenderAndParty } from "../utils/shared";
import "./style.scss";

const Congress = () => {
  const [chamber, setChamber] = useState("senate");
  const [selectedMembers, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [membersPerPage] = useState(7);
  const [toggleAdvancedFilter, setAdvancedFilter] = useState(false);
  const [gender, setGender] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [party, setParty] = useState('');

  const fetchMembers = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.propublica.org/congress/v1/114/${chamber}/members.json`,
      requestObj
    );
    const jsonData = await response.json();
    const results = jsonData.results.map((res) => res)[0];
    setMembers(results.members.flat());
    setLoading(false);
  };

  const lowercasedFilter = filterText.toLowerCase();
  const searchFieldsKeys = searchFields.map((f) => f.key);
  let filteredMembers = selectedMembers.filter((item) => {
    return Object.keys(item).some((key) =>
      (
        searchFieldsKeys.includes(key) &&
        item[key].toString().toLowerCase().includes(lowercasedFilter)
      )
    );
  });

  const checkAdvancedFilters = () => {
    if (gender) {
      filteredMembers = filteredMembers.filter(item => item.gender.toLowerCase().includes(gender))
    }

    if (party) {
      filteredMembers = filteredMembers.filter(item => item.party.toLowerCase().includes(party))
    }

    if (firstName) {
      filteredMembers = filteredMembers.filter(item => item.first_name.toLowerCase().includes(firstName))
    }
    if (lastName) {
      filteredMembers = filteredMembers.filter(item => item.last_name.toLowerCase().includes(lastName))
    }
  }

  useEffect(() => {
    fetchMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetFilters = () => {
    setFilterText('');
    setGender('');
    setLastName('');
    setFirstName('');
    setParty('');
  }

  const setChamberHandler = (chamber) => {
    setMembers([]);
    setChamber(chamber);
    fetchMembers();
    resetFilters();
    setAdvancedFilter(false)
  };

  const handleFilter = (event) => {
    setPageNumber(1);
    let filterText = handleGenderAndParty(event.target.value.toLowerCase().trim());
    setFilterText(filterText);
  };

  const handleFilterToggle = () => {
    resetFilters();
    setAdvancedFilter(!toggleAdvancedFilter)
  }

  const previousPage = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    if (paginatedMembers.length < membersPerPage) return;
    setPageNumber(pageNumber + 1);
  };



  const setAdvancedFilters = (fieldKey, event) => {
    let valueToLowerCase = handleGenderAndParty(event.target.value.toLowerCase().trim());
    // eslint-disable-next-line default-case
    switch (fieldKey) {
      case 'gender':
        setGender(valueToLowerCase);
        return
      case 'party':
        setParty(valueToLowerCase);
        return
      case 'first_name':
        setFirstName(valueToLowerCase);
        return;
      case 'last_name':
        setLastName(valueToLowerCase);
        return;
    }

  };

  checkAdvancedFilters();

  const currentPage = pageNumber * membersPerPage - membersPerPage;
  const paginatedMembers = filteredMembers.splice(currentPage, membersPerPage);

  return (
    <div className='container'>
      <ButtonsList setChamber={setChamberHandler} />
      {toggleAdvancedFilter ? (
        <SearchFilter
          handleAdvancedFilter={setAdvancedFilters}
          gender={gender}
          firstName={firstName}
          lastName={lastName}
          party={party}
        />
      ) : (
          <input
            placeholder='Search by first name, last name, gender or party'
            onChange={handleFilter}
            className="filterInput"
          />
        )}

      <button
        className="toggleFilterButton"
        onClick={handleFilterToggle}
      >
        {toggleAdvancedFilter
          ? "Toggle simple search"
          : "Toggle advanced Search"}
      </button>

      {loading ? (
        <h3>Loading...</h3>
      ) : (
          <CongressList chamber={chamber} membersList={paginatedMembers} />
        )}
      <div>
        <h4>Page {pageNumber}</h4>
      </div>
      <div>
        <button className='pageButton' onClick={previousPage}>
          prev
        </button>
        <button className='pageButton' onClick={nextPage}>
          next
        </button>
      </div>
    </div>
  );
};

export default Congress;
