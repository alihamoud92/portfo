import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Navigate, useSearchParams, Outlet } from "react-router-dom";
export const baseUrl = "https://yarlaadmin.icrcompany.net/api/";
export const fileUrl = "https://yarlaadmin.icrcompany.net/storage/";

// !======================================================================================
export const usePOST = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [viewFile, setViewFile] = useState("");
  const [viewImages, setViewImages] = useState({});
  const [images, setImages] = useState({});
  const [checkArray, setCheckArray] = useState({});
  const [dataPlayer, setDataPlayer] = useState();

  //=====================================================> function change   data all
  const handleChangeInput = (event) => {
    const { name, value, type, files, checked } = event.target;
    const newValue =
      type === "file" ? files[0] : type === "checkbox" ? checked : value;
    type === "file" && setViewFile(URL.createObjectURL(newValue));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue === true ? 1 : newValue === false ? 0 : newValue,
    }));
  };
  //=====================================================>  function change  array images
  const handleChangeArrayImages = (event) => {
    const { files, name } = event.target;
    setImages({ ...images, [name]: [files[0]] });
    if (images[name]) {
      setImages({
        ...images,
        [name]: [...images[name], files[0]],
      });
    }
    setViewImages({ ...viewImages, [name]: [URL.createObjectURL(files[0])] });
    if (images[name]) {
      setViewImages({
        ...viewImages,
        [name]: [...viewImages[name], URL.createObjectURL(files[0])],
      });
    }
  };
  //=====================================================> function change   array checkbox
  const handleCheckedArray = (e) => {
    const { value, checked, name } = e.target;
    if (checked) {
      setCheckArray({ ...checkArray, [name]: [value] });
      if (checkArray[name]) {
        setCheckArray({
          ...checkArray,
          [name]: [...checkArray[name], value],
        });
      }
    } else {
      if (checkArray[name]) {
        setCheckArray({
          ...checkArray,
          [name]: checkArray[name].filter((p) => p !== value),
        });
      }
    }
  };

  //=====================================================> post data
  const handleSubmit = async (url, route, noRoute, reload) => {
    setLoading(true);
    setError("");
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }
    for (const [key, value] of Object.entries(checkArray)) {
      for (let i = 0; i < value.length; i++) {
        formDataToSend.append(key, value[i]);
      }
    }
    for (const [key, value] of Object.entries(images)) {
      for (let i = 0; i < value.length; i++) {
        formDataToSend.append(key, value[i]);
      }
    }

    axios
      .post(`${baseUrl}${url}`, formDataToSend, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((req) => {
        setLoading(false);
        setError("");
        setDataPlayer(req);
        route
          ? console.log("s")
          : noRoute
          ? console.log("s")
          : reload
          ? window.location.reload()
          : window.history.go(-1);
      })
      .catch((e) => {
        setError(e.response.data?.message);
        setLoading(false);
        setDataPlayer(e);
      });
  };
  return {
    formData,
    setFormData,
    viewFile, //  لعرض الصورة او فيديو .....
    setViewFile, // ((local)) لحذف الصورة
    viewImages, // لعرض الصور
    setViewImages, // ((local)) لحذف الصور
    images, //api  لأرسال الصور الى
    setImages, //api  لحذف الصور الى
    error,
    setError,
    loading,
    setLoading,
    handleChangeInput,
    handleCheckedArray,
    handleChangeArrayImages,
    handleSubmit,
    checkArray,
    setCheckArray,
    dataPlayer,
  };
};

//!=============================================================>start fetch data
export const useFETCH = (url, urlDelete) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isErroe, setIsError] = useState("");
  useEffect(() => {
    if (url) {
      setIsLoading(true);
      axios
        .get(`${baseUrl}${url}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((req) => {
          if (req) {
            setData(req);
            setIsLoading(false);
            setIsError("");
          }
        })
        .catch((e) => {
          setIsLoading(false);
          setIsError("خطأ في جلب البيانات");
        });
    }
  }, [url]);

  //?=============================================================> deleteItem
  const deleteItem = async (e) => {
    setIsLoading(true);
    axios
      .delete(`${baseUrl}${urlDelete || url}/${e.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((req) => {
        setIsLoading(false);
        setIsError("تم الحذف  بنجاح");
        window.location.reload();
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(" خطأ في الحذف  حاول مرة آخرى");
      });
  };
  return { data, isLoading, isErroe, deleteItem };
};
//=============================================================> end fetch data

//?=============================================================> close items
export const useClose = () => {
  const [open, setOpen] = useState(false);
  const mouse = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (mouse.current) {
        if (!mouse.current.contains(e.target)) {
          setOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  }, []);

  return { open, setOpen, mouse };
};
//!=============================================================> pagination or filter or search
export const useFilter = (params) => {
  const [filter, setFilter] = useSearchParams();
  const handlePageClick = (event) => {
    setFilter(
      params || {
        page: event.selected + 1,
        sort_value: filter.get("sort_value") ? filter.get("sort_value") : "",
        sort_by: filter.get("sort_by") ? filter.get("sort_by") : "",
        state: filter.get("state") ? filter.get("state") : "",
      }
    );
  };
  return { filter, handlePageClick, setFilter };
};
//!=============================================================> عدم دخول من غير تسجيل دخول
export const RequireAuth = () => {
  if (!window.localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
//! =============================================================>عدم فتح صفحة تسجيل دخول اذا مسجل مسيقا
export const RequireLogin = () => {
  if (window.localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

// ==========================================================> شرط الصفحات المسموح الدخول اليها
export const RequireAdmin = ({ name }) => {
  if (name === localStorage.getItem("role_name")) {
    return <Navigate to="/403" />;
  }
  return <Outlet />;
};

//!=============================================================> تكبير الصورة
export const clickZoomInImage = (event) => {
  event.target.requestFullscreen();
};
