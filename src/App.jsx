import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";


function App() {
  let fiveContacts = []
  for (let i = 0; i < 5; i++) {
    fiveContacts.push(contacts[i])
  }
  const [ironContacts, setContact] = useState(fiveContacts)
  //const [ironContacts, setContact] = useState(contacts.slice(0,5))
  
  //const [remainingContacts, setRemainingContact] = useState(contacts.slice(5, contact.length)) --> Here we are only using the ones that are not on the array of 5, which is the one we already displayed.
  

  //If you want to select the first 5 elements of the array you have to: 

  function addRandomContact() {
    let newContacts = [...ironContacts]
    const randomContact = contacts[(Math.floor(Math.random() * contacts.length))]
    console.log(randomContact)
    if (!newContacts.includes(randomContact)) {
      newContacts.push(randomContact)
    }
    setContact(newContacts)
  }

  const sortByPopularity = () => {
    const contactsToSort = [...ironContacts]
    contactsToSort.sort((b, a) => {
      console.log(a.popularity)
      if (a.popularity > b.popularity) {
        return 1
      } else if (a.popularity < b.popularity) {
        return -1
      }
    })
    setContact(contactsToSort)
  }

  const sortByName = () => {
    const contactsToSortByName = [...ironContacts]

    contactsToSortByName.sort((a, b) => {

      return a.name.localeCompare(b.name)
    })
    console.log(contactsToSortByName)
    setContact(contactsToSortByName)
  }

  const deleteMovie = (contactId) => {
    const filteredContacts = ironContacts.filter((eachContact) => {
      return eachContact.id !== contactId
    })
    setContact(filteredContacts)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={() => {
        addRandomContact()
      }}>ADD RANDOM CONTACT
      </button>

      <button onClick={sortByPopularity}>SORT BY POPULARITY
      </button>

      <button onClick={sortByName}>SORT BY NAME
      </button>



      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {ironContacts.map((contact, index) => {

          return (
            <tbody key={index}>
              <tr>
                <td><img src={contact.pictureUrl} alt="" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : "No"}</td>
                <td>{contact.wonEmmy ? "🌟" : "No"}</td>
                <td><button onClick={() => {
                  deleteMovie(contact.id)
                }}>DELETE
                </button></td>
              </tr>
            </tbody>
          )
        }
        )}
      </table>


    </div>
  );
}

export default App;
