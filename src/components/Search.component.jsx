import React from "react";

export const Search = () => {
  return (
    <div className="col-2 bg-danger text-center">
      <h2 className="text-white py-3">Search</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="meta1"
            placeholder="Meta Data 1"
            required
          />
        </div>
        <div style={{ marginTop: ".5rem" }} className="form-group">
          <input
            type="text"
            className="form-control"
            id="meta2"
            placeholder="Meta Data 2"
          />
        </div>
        <button
          style={{ marginTop: ".5rem" }}
          type="submit"
          className="btn btn-primary w-75"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
