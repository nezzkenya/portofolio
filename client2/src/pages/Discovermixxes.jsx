import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MpNav from "../components/MpNav";
import MixCard from "../components/MixCard";
import ReactPaginate from "react-paginate";
import { Blocks } from "react-loader-spinner";

const Discovermixxes = () => {
  const [loading, setloading] = useState(true);
  const [all, setAll] = useState();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [type, setType] = useState("");
  useEffect(() => {
    async function All() {
      setloading(true);
      const all = await fetch("https://server-km.onrender.com/api");

      const res = await all.json();
      setAll(res);
      setloading(false);
    }
    All();
  }, []);
  useEffect(() => {
    async function getProfile() {
      const response = await fetch(
        "https://server-nezz.vercel.app/api/user/profile",
        {
          headers: {
            "auth-token": localStorage.getItem("mixtube-user"),
          },
        }
      );
      if (!response.ok) {
        const message = `an error occurred: ${response.statusText}`;
        console.error(message);
        console.log(response.status);
        handleLogout();
        return;
      }
    }
    const type = localStorage.getItem("mixtube-type");
    getProfile();
    setType(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, navigate]);
  function handleLogout() {
    localStorage.removeItem("mixtube-type");
    localStorage.removeItem("mixtube-username");
    localStorage.removeItem("mixtube-user");
    localStorage.getItem("mixtube-user") ?? navigate("/login");
  }
  function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = all.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(all.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % all.length;

      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        {all.length < 4 ? null : (
          <ReactPaginate
            activeClassName="bg-slate-600"
            pageClassName="border px-2 rounded-sm py-0.5 dark:text-slate-50"
            previousLinkClassName="bg-blue-600 font-serif rounded-md hover:bg-blue-800 p-2"
            nextLinkClassName=" p-2 bg-blue-600 font-serif rounded-md hover:bg-blue-800"
            containerClassName="flex gap-x-5 justify-center dark:text-slate-50 border rounded-lg p-3"
            breakLabel="..."
            nextLabel=" next "
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel=" back "
            renderOnZeroPageCount={null}
          />
        )}
      </>
    );
  }
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((mymixxes) => {
            return (
              <div className="grid gap-4 ">
                <Link to={`/mixtape/${mymixxes.unique}/`} key={mymixxes._id}>
                  <MixCard
                    likes={mymixxes.liked_by}
                    Djname={mymixxes.Djname}
                    key={mymixxes.link}
                    title={mymixxes.title}
                    year={mymixxes.date}
                    name={mymixxes.name}
                    img={mymixxes.imgthumb}
                    downloads={mymixxes.downloads}
                  />
                </Link>
              </div>
            );
          })}
      </>
    );
  }
  return (
    <div className=" min-h-screen">
      <div className="flex justify-between">
        <NavLink to={"/search"} key={null}>
          <div className=" w-42">
            <MpNav key={null} place={"search mixtape"} />
          </div>
        </NavLink>
        <div className="hidden mx:flex gap-x-5">
          <NavLink to={"/discoverdjs"} key={null}>
            <div>
              <button className=" rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                Discover Djs
              </button>
            </div>
          </NavLink>
          <NavLink to={"/discover"} key={null}>
            <div>
              <button className=" rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                Discover mixxes
              </button>
            </div>
          </NavLink>
          <div className="">
            {localStorage.getItem("mixtube-type") && (
              <NavLink to={type === "user" ? `/profile` : `/profiledj`}>
                <button className=" rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                  my Profile
                </button>
              </NavLink>
            )}
          </div>
        </div>
        <div className=" mx:hidden">
          <button
            className="relative "
            onClick={() => {
              if (!open) {
                setOpen(!false);
              } else {
                setOpen(false);
              }
            }}
          >
            <div className="ring-1 rounded-full p-3">
              {!open ? (
                <CiMenuFries className="h-4 w-4 dark:text-slate-50" />
              ) : (
                <IoClose className="h-4 w-4 dark:text-slate-50" />
              )}
            </div>
          </button>
          {open && (
            <div className=" shadow-1 absolute right-16 top-40 border-4 p-4 rounded-lg  dark:border-slate-200 bg-slate-900 text-slate-50">
              <div className="grid gap-2 w-full">
                <NavLink to={"/discoverdjs"} key={null}>
                  <div>
                    <button className=" w-full rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                      Discover Djs
                    </button>
                  </div>
                </NavLink>
                <NavLink to={"/discover"} key={null}>
                  <div>
                    <button className=" rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                      Discover mixxes
                    </button>
                  </div>
                </NavLink>
                <div className="">
                  {localStorage.getItem("mixtube-type") && (
                    <NavLink to={type === "user" ? `/profile` : `/profiledj`}>
                      <button className="w-full rounded-3xl px-3 py-1 font-righteous dark:text-slate-50 border-2 text-xs  lg:text-lg h-10">
                        my Profile
                      </button>
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {all && (
        <div>
          <div>
            <h5 className=" dark:text-slate-50 py-2 pl-3 font-righteous">
              DISCOVER MIXTAPES
            </h5>
          </div>

          {loading ? (
            <div className="grid justify-center items-center gap-3 m-1/2">
              <Blocks
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
              />
            </div>
          ) : (
            <div className="gap-4 grid  mx:grid-cols-2">
              <PaginatedItems itemsPerPage={10} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Discovermixxes;
