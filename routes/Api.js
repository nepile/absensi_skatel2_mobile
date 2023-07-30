import React, { useState, useEffect } from "react";

const baseUrl = "http://192.168.43.219:19001/api/";
const loginApi = `${baseUrl}login`;
const updtPasswordApi = `${baseUrl}change-password`;

export { loginApi, updtPasswordApi };
