import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../api";

const INITIAL_STATE = {
  loading: false,
  success: false,
  userLists: null,
  messages: [],
  chats: null,
  selectedUser: null,
  error: null,
};

export const getOtherUsers = createAsyncThunk(
  "chat/getOtherUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/user/other-users");
      return data;
    } catch (error) {
      const msgError = error.response.data.message || "Something Went Wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

export const getChats = createAsyncThunk(
  "chat/getChats",
  async (id, { rejectWithValue }) => {
    try {
      console.log("Called Get Chats");
      const { data } = await api.get(`/user/message/${id}`);
      return data;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something Went Wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

export const setSendChat = createAsyncThunk(
  "chat/setSendChat",
  async (info, { rejectWithValue }) => {
    try {
      const { id, message } = info;

      const { data } = await api.post(
        `/user/message/send/${id}`,
        JSON.stringify({ message })
      );
      return data;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something Went Wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

export const getUnreadUserMessages = createAsyncThunk(
  "chat/getUnreadUserMessages",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/user/message/${id}/unread`);
      return data.unread;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something Went Wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Function to Mark Selected User Unread Messages:
export const markUserMessagesAsRead = createAsyncThunk(
  "chat/markUserMessagesAsRead",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.post(`/user/message/${id}/read`);
      return data.unread;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something Went Wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Function to Mark All Unread Messages:
export const markAllUnreadMessages = createAsyncThunk(
  "chat/markAllUnreadMessages",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/user/message/read");
      return;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something Went Wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: INITIAL_STATE,
  reducers: {
    resetUserSuccess: (state) => {
      state.success = false;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setSendChatMessage: (state, action) => {
      state.chats = action.payload;
    },
    setUnreadMessages: (state, action) => {
      const { _id, read } = action.payload;
      if (!read) {
        const messageExist = state.messages.some((n) => n._id === _id);
        if (!messageExist) {
          state.messages = [...state.messages, action.payload];
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Getting Other Users:
      .addCase(getOtherUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOtherUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userLists = action.payload;
      })
      .addCase(getOtherUsers.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Getting Chat Messages:
      .addCase(getChats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.chats = action.payload;
      })
      .addCase(getChats.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Sending Chat Message:
      .addCase(setSendChat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setSendChat.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.chats = [...state.chats, action.payload];
      })
      .addCase(setSendChat.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Unread Messages:
      .addCase(getUnreadUserMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUnreadUserMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.messages = action.payload;
      })
      .addCase(getUnreadUserMessages.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Mark Selected User Unread Messages:
      .addCase(markUserMessagesAsRead.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(markUserMessagesAsRead.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.messages = action.payload;
      })
      .addCase(markUserMessagesAsRead.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Mark All Unread Messages:
      .addCase(markAllUnreadMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(markAllUnreadMessages.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.messages = [];
      })
      .addCase(markAllUnreadMessages.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const {
  resetUserSuccess,
  setSelectedUser,
  setSendChatMessage,
  setUnreadMessages,
  setUserReadMessages,
} = chatSlice.actions;
export default chatSlice.reducer;
