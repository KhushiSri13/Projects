import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromNotes } from "../redux/noteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Notes = () => {
  // filter contents
  const note = useSelector((state) => state.notes.note);
  // console.log(note);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filteredData = note.filter((notes) =>
    notes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(NotesId) {
    dispatch(removeFromNotes(NotesId));
  }
  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-[600px] mt-5 border-1 border-b-blue-950"
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 &&
          filteredData.map((notes) => {
            return (
              <div className="border" key={notes?.id}>
                <div>{notes.title}</div>
                <div>{notes.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button>
                    <Link to={`/?notesId=${notes?._id}`}>edit</Link>
                  </button>
                  <button>
                    <Link to={`/notes/${notes?._id}`}>view</Link>
                  </button>
                  <button onClick={() => handleDelete(notes?._id)}>
                    delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(notes?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    copy
                  </button>
                  <button>share</button>
                </div>
                <div>{notes.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Notes;
