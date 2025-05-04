import Cookies from "js-cookie";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000/api";

interface FetchAPIOptions<T> {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  data?: T | FormData;
  id?: string | number;
  slug?: string;
}

export const fetchAPI = async <T = unknown, R = unknown>(p0: string, p1: string, p2: null, p3: null, p4: string, {
  endpoint, method = "GET", data, id, slug,
}: FetchAPIOptions<T>): Promise<R> => {
  const accessToken = Cookies.get("access_token");

  let url = `${API_BASE}/${endpoint}`;
  if (id) url += `/${id}`;
  if (slug) url += `?slug=${slug}`;

  const isFormData = data instanceof FormData;

  const headers: HeadersInit = {
    ...(accessToken && { Authorization: `JWT ${accessToken}` }),
    ...(!isFormData && { "Content-Type": "application/json" }),
  };

  const options: RequestInit = {
    method,
    headers,
    ...(data && { body: isFormData ? data : JSON.stringify(data) }),
  };

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();

    if (!response.ok) {
      const errorMessage =
        responseData.message ||
        responseData.detail ||
        responseData.error ||
        "Request failed";
      throw new Error(errorMessage);
    }

    return responseData as R;
  } catch (error: any) {
    console.error("API Error:", error.message);
    throw new Error(error.message || "An unexpected error occurred");
  }
};
