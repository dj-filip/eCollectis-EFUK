import { baseURL } from "api.config.js";

export const getPermissions = async (roles) => {
  const rolesLength = roles.length;

  const permissions = [];

  for (let i = 0; i < rolesLength; i++) {
    const res = await baseURL.get(`/role/role/${roles[i]}`);

    permissions.push({
      id: roles[i],
      name: res.data.name,
      create: res.data.create,
      read: res.data.read,
      update: res.data.update,
      delete: res.data.delete,
    });
  }

  return permissions;
};

export const getRole = async (id) => {
  try {
    const res = await baseURL.get(`/role/role/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};