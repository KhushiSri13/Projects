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
  async function handleShare(notes) {
    if (!notes) return;

    const shareUrl = `${window.location.origin}/note/${notes._id}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: notes.title,
          text: "Check out this note!",
          url: shareUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => alert("Link copied to clipboard!"))
        .catch(() => alert("Failed to copy link."));
    }
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
                <div className="flex flex-row gap-4 place-content-evenly text-black">
                  <button>
                    <Link to={`/?notesId=${notes?._id}`}>Edit</Link>
                  </button>
                  <button>
                    <Link to={`/notes/${notes?._id}`}>View</Link>
                  </button>
                  <button onClick={() => handleDelete(notes?._id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(notes?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button onClick={handleShare}>Share</button>
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
