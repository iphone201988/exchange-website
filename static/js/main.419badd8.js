(() => {
  "use strict";
  var e = {
      419: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADQSURBVHgB3ZXtDYIwEIbfMgFMYJ3AbqCjuQEruIEjdARH0A1gg7MXOdNAK9qe/vBJIISmT++jyQErEFEfnoGW8L8epUziNY4oIYrYJtasZJDb3+CXTBF5Stf5FT6V4Vz8qTRmyB4QFs5Ujxefmcm5OS3qGI0xHX80kdgpiJlWShPfFgs93Fx+gB4L+Q56bPj1bKhSM4VbaOrWTGJO4wJdOimLhT5W5A76OJHvoY/7ZuTWhGbyDRmgz4j/hR5DIMcVNVB+gOQHQ8EBp0jq3xHfAfZ9lTogxy+wAAAAAElFTkSuQmCC";
      },
      448: (e, t, n) => {
        n.r(t), n.d(t, { default: () => Lt });
        var o = n(4701),
          a = n(5675),
          i = n(3929),
          r = n(2772),
          l = n(6933),
          s = n(558),
          d = n(6665),
          c = n(6283),
          u = n(6725),
          f = n(484),
          h = n(5648),
          g = n(5708),
          m = n(1690),
          p = n(8179),
          x = n(6393);
        const y = {
            PoppinsRegular: "poppins.regular",
            PoppinsMedium: "poppins.medium",
            PoppinsSemi: "Poppins-SemiBold",
            Playfair: "PlayfairDisplay-SemiBold",
            PoppinsLight: "Poppins-Light",
          },
          A = {
            black: "#222324",
            white: "#F5F7F8",
            primeryWhite: "#FFFFFF",
            primary: "#F1E4C3",
            primaryGreen: "#597E52",
            primaryLite: "#4B8ABA",
            lightpurple: "#9c97c8",
            lightsky: "#C2D1DD",
            primarybordercolor: "#E2E2E2",
            primarygraycolor: "#6F7479",
            primaryBackgroundColor: "#FCFCFC",
            maroon: "#8D0706",
            darkbordercolor: "#6F7479",
            lightBlack: "#424242",
            blue: "#191362",
            likeBlue: "#2b68e3",
          },
          w = {
            Calender: n(5543),
            Load: n(7903),
            Close: n(6415),
            ShowP: n(7922),
            HideP: n(6035),
            Banner: n(2313),
            star: n(8416),
            yout: n(6859),
            link: n(5883),
            insta: n(2346),
            facebook: n(3446),
            subsCription: n(5552),
            nottification: n(3024),
            mess: n(4367),
            follow: n(1220),
            beg: n(6357),
            tip: n(708),
            sort: n(1031),
            publi: n(2187),
            filltern: n(3873),
            pdf: n(1577),
            comment: n(2100),
            like: n(4898),
            search: n(4319),
            share: n(954),
            Exchange: n(5204),
            Exchange1: n(6999),
            CommImage: n(1060),
            CommImage1: n(6007),
            CommImage2: n(7276),
            Commessage: n(4615),
            Commpp: n(4403),
            Comnoti: n(419),
            ArrowL: n(7478),
            ThreeDots: n(6599),
            CommbackImg: n(1426),
            Plus: n(7579),
            Short: n(3246),
            ArrowDown: n(6952),
            Setting: n(5303),
            OneByOne: n(3882),
            Commback: n(7333),
            Calander: n(7169),
            Request: n(5104),
            Dislike: n(6822),
            Airoplane: n(6526),
            Grid: n(1099),
            Gridicon: n(4616),
            Edit: n(1103),
            FollowingCommunity: n(9231),
            fbic: n(7003),
            heart: n(8559),
            laughIc: n(2942),
          },
          b = "http://192.168.0.153:8001",
          C = {
            LOGIN: `${b}/accounts/login/`,
            SIGN_UP: `${b}/accounts/signup/`,
            VERIFIY_OTP: `${b}/accounts/verify-account/`,
            RESEND_OTP: `${b}/accounts/resend-otp/`,
            FORGOT_PASSWORD_OTP: `${b}/accounts/password-reset-request/`,
            VERIFY_FORGOT_PASSWORD_OTP: `${b}/accounts/password-verify-otp/`,
            UPDATE_FORGOT_PASSWORD: `${b}/accounts/password-update-otp/`,
            USER_PROFILE: `${b}/accounts/user/`,
            EDIT_PROFILE: `${b}/accounts/user/`,
            FOLLOW_REQIUEST: `${b}/accounts/follow/`,
            FOLLOWING_LIST: `${b}/accounts/following/`,
            USER_FOLLOWING_LIST: `${b}/accounts/following/`,
            FOLLOWER_LIST: `${b}/accounts/follower/`,
            USER_FOLLOWER_LIST: `${b}/accounts/follower/`,
            UN_FOLLOW: `${b}/accounts/unfollow/`,
            UN_BLOCK_USER: `${b}/accounts/unblock/`,
            BLOCK_USER: `${b}/accounts/block/`,
            USER_BLOCK_LIST: `${b}/accounts/blocked-users/`,
            LOGOUT: `${b}/accounts/logout/`,
            USER_CONTENT_LIST: `${b}/content/content/`,
            OTHER_CONTENT_LIST: `${b}/content/user/`,
            ALL_USER_CONTENT_LIST: `${b}/content/content-list/`,
            UPLOAD_CONTENT: `${b}/content/content/`,
            SEARCH_CONTENT: `${b}/content/search-content/?q=`,
            REACTION_CONTENT: `${b}/content/content-reaction/`,
            SAVE_CONTENT: `${b}/content/save-content/`,
            REMOVE_CONTENT: `${b}/content/save-content/`,
            GET_CONTENT: `${b}/content/save-content/`,
            CREATE_CONTENT_COMMENT: `${b}/content/comment/`,
            GET_CONTENT_COMMENT: `${b}/content/comment/?content_id=`,
            CONTENT_COMMENT_REACTION: `${b}/content/comment-reaction/`,
            DELETE_CONTENT_COMMENT: `${b}/content/comment/`,
            EDIT_CONTENT_COMMENT: `${b}/content/comment/`,
            GET_VIDEOS: `${b}/content/tending-reels/`,
            JOIN_COMMUNITIES: `${b}/community/join/`,
            GET_MY_COMMUNITIES: `${b}/community/my-community/`,
            BEST_COMMUNITIES: `${b}/community/best-communities/`,
            BEST_CONTRIBUTOR: `${b}/community/best-contributor/`,
            SEARCH_COMMUNITY: `${b}/community/search-community/?q=`,
            COMMUNITY_LIST: `${b}/community/community/`,
            CREATE_COMMUNITY: `${b}/community/community/`,
            MY_FOLLOWED_COMMUNITY: `${b}/community/followed-community/`,
            ALL_COMMUNITY_LIST: `${b}/community/all-community/`,
            GET_COMMUNITY_REQUEST_QUESTION: `${b}/community/community-request/`,
            GET_COMMUNITY_ANSWER: `${b}/community/community-answer/`,
            GET_COMMUNITY_REQUEST_LIST: `${b}/community/requests-answers/`,
            CREATE_COMMUNITY_REQUEST_QUESTION: `${b}/community/community-request/`,
            CREATE_COMMUNITY_ANSWER: `${b}/community/community-answer/`,
            EDIT_COMMUNITY_ANSWER: `${b}/community/manage-answer/`,
            GET_EDITED_COMMUNITY_ANSWER: `${b}/community/manage-answer/`,
            DELETE_COMMUNITY_ANSWER: `${b}/community/manage-answer/`,
            LIKE_UNLIKE_ANSWER: `${b}/community/like-unlike/`,
            MARK_ANS_AS_SOLVED: `${b}/community/mark-accepted/`,
            CREATE_COMMUNITY_POST: `${b}/community/communitypost/`,
            GET_COMMUNITY_POST: `${b}/community/posts-community/?community_id=`,
            CREATE_COMMUNITY_POST_COMENT: `${b}/community/comment/`,
            GET_COMMUNITY_POST_COMENT: `${b}/community/comment/?post_id=`,
            EDIT_COMMUNITY_POST_COMENT: `${b}/community/comment/`,
            DELETE_COMMUNITY_POST_COMENT: `${b}/community/comment/`,
            COMMUNITY_POST_COMENT_REACTION: `${b}/community/comment-reaction/`,
            COMMUNITY_POST_COMENT_REACTION_REMOVE: `${b}/community/comment-reaction/?comment_id=`,
            COMMUNITY_POST_REACTION: `${b}/community/post-reaction/`,
            SAVE_COMMUNITY_POST: `${b}/community/save-content/`,
            REMOVE_SAVE_COMMUNITY_POST: `${b}/community/save-content/?post_id=`,
            UPDATE_COMMUNITY_BACKGROUND_IMAGE: `${b}/community/community-bg-pic/`,
          };
        var j = n(5259),
          S = n(397);
        const I = a.default.create({
            container: {
              width: "100%",
              borderWidth: 1,
              borderColor: A.white,
              borderRadius: 16,
              alignItems: "center",
              alignSelf: "center",
            },
            img: {
              height: "100%",
              width: "100%",
              borderRadius: 16,
              alignSelf: "center",
            },
            headerText: {
              color: A.white,
              fontFamily: "PoppinsSemi",
              position: "absolute",
              margin: 20,
              left: 0,
              fontSize: 32,
            },
          }),
          T = ({ backNavigation: e = !1 }) => {
            const t = (0, p.useNavigation)(),
              n = (0, s.default)().width,
              o = n < 426;
            return (0, S.jsxs)(h.default, {
              onPress: () => e && t.goBack(),
              activeOpacity: e ? 0.8 : 1,
              style: [I.container, { height: o ? 140 : 240 }],
              children: [
                (0, S.jsx)(f.default, { source: w.Banner, style: I.img }),
                (0, S.jsx)(c.default, {
                  style: [I.headerText, { fontSize: o ? 24 : 32 }],
                  children: "Swiss X-Change",
                }),
              ],
            });
          },
          E = ["NewsScreen", "ProfileScreen", "ExchangeScreen"],
          k = a.default.create({
            container: {
              backgroundColor: "white",
              height: 55,
              borderBottomEndRadius: 40,
              borderBottomStartRadius: 40,
              minWidth: 240,
              flexDirection: "row",
              justifyContent: "space-around",
              padding: 2,
            },
            tabButton: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              borderBottomEndRadius: 40,
              borderBottomStartRadius: 40,
            },
            selectedTabButton: { backgroundColor: "#2D2B9B" },
            tabText: { fontSize: 16, fontWeight: "bold", color: "#000" },
            selectedTabText: { color: "white" },
          }),
          B = () => {
            const e = (0, p.useNavigation)(),
              t = e.getState().routeNames[0],
              n = (0, s.default)().width,
              o = n < 426 ? "90%" : n < 768 ? "80%" : "60%";
            return (0, S.jsx)(i.default, {
              style: [k.container, { width: o }],
              children: E.map((n) =>
                (0, S.jsx)(
                  h.default,
                  {
                    style: [
                      k.tabButton,
                      t === n.replace("Screen", "") && k.selectedTabButton,
                    ],
                    onPress: () => e.navigate(n),
                    children: (0, S.jsx)(c.default, {
                      style: [
                        k.tabText,
                        t === n.replace("Screen", "") && k.selectedTabText,
                      ],
                      children: n.replace("Screen", ""),
                    }),
                  },
                  n
                )
              ),
            });
          };
        var R = n(7109);
        const O = async () => {
            try {
              const e = await j.default.getItem("access_token");
              if ((console.log("CHECK Token:", e), !e)) {
                const e = "Access token not found. Please log in again.";
                return window.alert(`Alert\n\n${e}`), null;
              }
              return e;
            } catch (e) {
              return console.error("Error retrieving access token:", e), null;
            }
          },
          v = async (e, t, n) => {
            try {
              const o = await R.default.post(e, t, {
                headers: Object.assign(
                  {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  n ? { Authorization: `Bearer ${n}` } : {}
                ),
              });
              return console.log("response :>> ", o), o;
            } catch (o) {
              throw (
                (console.error("POST API Error:", o?.response || o.message),
                console.log("error :>> ", o),
                o?.response?.data || o)
              );
            }
          },
          P = async (e, t) => {
            try {
              const n = await R.default.get(e, {
                headers: Object.assign(
                  { "Content-Type": "application/json" },
                  t ? { Authorization: `Bearer ${t}` } : {}
                ),
              });
              return console.log("response get api :>> ", n), n.status, n;
            } catch (n) {
              throw (
                (console.error("GET API Error:", n?.response || n.message),
                console.log("error get API  :>> ", n),
                n?.response?.data || n)
              );
            }
          },
          M = async (e, t, n) => {
            try {
              const o = await R.default.put(e, t, {
                headers: Object.assign(
                  {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  n ? { Authorization: `Bearer ${n}` } : {}
                ),
              });
              return console.log("PUT response :>> ", o), o;
            } catch (o) {
              throw (
                (console.error("PUT API Error:", o?.response || o.message),
                console.log("PUT error :>> ", o),
                o?.response?.data || o)
              );
            }
          },
          U = async (e, t) => {
            try {
              const n = await R.default.delete(e, {
                headers: Object.assign(
                  {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  t ? { Authorization: `Bearer ${t}` } : {}
                ),
              });
              return console.log("DELETE response :>> ", n), n;
            } catch (n) {
              throw (
                (console.error("DELETE API Error:", n?.response || n.message),
                console.log("DELETE error :>> ", n),
                n?.response?.data || n)
              );
            }
          };
        var D = n(893);
        const N = ({ route: e }) => {
            const { id: t } = e.params || {};
            console.log("\ud83d\ude80 ~ Profile ~ id:", t);
            const n = (0, p.useNavigation)(),
              [o, s] = (0, d.useState)(null),
              [m, y] = (0, d.useState)(!1),
              [I, E] = (0, d.useState)(u.default.get("window").width);
            (0, d.useEffect)(() => {
              u.default.addEventListener("change", () => {
                E(u.default.get("window").width);
              });
            }, []);
            const k = I < 800,
              R = (0, p.useIsFocused)();
            (0, d.useEffect)(() => {
              R && M();
            }, [R]);
            const M = async () => {
              const e = await O(),
                n = await j.default.getItem("mainProfile");
              console.log(
                "\ud83d\ude80 ~ GetProfile ~ Data:",
                n,
                "Data",
                t,
                "id"
              );
              const o = void 0 == t ? C.USER_PROFILE + n : C.USER_PROFILE + t;
              console.log("\ud83d\ude80 ~ GetProfile ~ URL:", o);
              try {
                const t = await P(o, e);
                console.log("Response data:", t.data.data), s(t.data.data);
              } catch (a) {
                console.error("Error get profile:", a);
              }
            };
            return (0, S.jsxs)(l.default, {
              style: z.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: z.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: z.scrollableContentContainer,
                  children: [
                    (0, S.jsx)(T, {}),
                    (0, S.jsx)(B, {}),
                    (0, S.jsxs)(i.default, {
                      style: { flex: 1, width: "100%" },
                      children: [
                        (0, S.jsxs)(x.default, {
                          intensity: 100,
                          style: {
                            flex: 1,
                            width: "100%",
                            borderWidth: 1,
                            borderColor: A.white,
                            borderRadius: 16,
                            marginTop: 20,
                            flexDirection: k ? "column" : "row",
                            padding: 15,
                            paddingVertical: 50,
                          },
                          children: [
                            (0, S.jsxs)(i.default, {
                              style: {
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                maxWidth: 240,
                                alignSelf: "center",
                              },
                              children: [
                                (0, S.jsx)(h.default, {
                                  onPress: async () => {
                                    const e = await j.default.getItem(
                                      "mainProfile"
                                    );
                                    console.log(
                                      "\ud83d\ude80 ~ GetProfile ~ Data:",
                                      e
                                    ),
                                      n.navigate("User", {
                                        id: void 0 == t ? e : t,
                                      });
                                  },
                                  children: (0, S.jsx)(f.default, {
                                    source: {
                                      uri: o?.avatar
                                        ? `${b}${o?.avatar}`
                                        : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
                                    },
                                    style: {
                                      height: 200,
                                      width: k ? 280 : 300,
                                      borderRadius: 16,
                                      maxWidth: 200,
                                    },
                                    resizeMode: "cover",
                                  }),
                                }),
                                (0, S.jsx)(i.default, {
                                  style: {
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginVertical: 10,
                                  },
                                  children: Array(5)
                                    .fill(null)
                                    .map((e, t) =>
                                      (0, S.jsx)(
                                        f.default,
                                        {
                                          source: w.star,
                                          style: {
                                            width: 20,
                                            height: 20,
                                            marginHorizontal: 3,
                                          },
                                        },
                                        t
                                      )
                                    ),
                                }),
                                void 0 == t &&
                                  (0, S.jsx)(g.default, {
                                    onPress: () => n.navigate("ChartAnalytics"),
                                    children: (0, S.jsx)(c.default, {
                                      style: {
                                        color: A.white,
                                        fontFamily: "PoppinsSemi",
                                        marginBottom: 10,
                                      },
                                      children: "\ud83d\udcc8 Check Earning",
                                    }),
                                  }),
                                (0, S.jsx)(c.default, {
                                  style: {
                                    color: A.white,
                                    fontFamily: "PoppinsSemi",
                                  },
                                  children: "Social media links:",
                                }),
                                (0, S.jsx)(i.default, {
                                  style: {
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    width: "100%",
                                    marginTop: 10,
                                    alignItems: "center",
                                    maxWidth: 200,
                                  },
                                  children: [
                                    w.facebook,
                                    w.link,
                                    w.insta,
                                    w.yout,
                                  ].map((e, t) =>
                                    (0, S.jsx)(
                                      f.default,
                                      {
                                        source: e,
                                        style: {
                                          width: 30,
                                          height: 30,
                                          borderRadius: 10,
                                        },
                                      },
                                      t
                                    )
                                  ),
                                }),
                              ],
                            }),
                            (0, S.jsxs)(i.default, {
                              style: {
                                width: k ? "100%" : "70%",
                                marginTop: k ? 30 : 0,
                                height: k ? "auto" : "100%",
                                flex: 1,
                              },
                              children: [
                                (0, S.jsxs)(i.default, {
                                  style: {
                                    flexDirection: I < 426 ? "column" : "row",
                                    justifyContent: "space-between",
                                    alignItems:
                                      I < 426 ? "center" : "flex-start",
                                    borderBottomWidth: 1,
                                    borderColor: A.white,
                                    paddingBottom: 5,
                                    width: "100%",
                                  },
                                  children: [
                                    (0, S.jsxs)(i.default, {
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      },
                                      children: [
                                        (0, S.jsx)(c.default, {
                                          style: {
                                            color: A.white,
                                            fontFamily: "PoppinsSemi",
                                            fontSize: 28,
                                          },
                                          children: o?.full_name,
                                        }),
                                        void 0 == t
                                          ? (0, S.jsx)(h.default, {
                                              onPress: () =>
                                                n.navigate("EditProfile", {
                                                  userData: o,
                                                }),
                                              style: {
                                                backgroundColor: "",
                                                marginLeft: 10,
                                              },
                                              children: (0, S.jsx)(f.default, {
                                                source: w.Edit,
                                                style: {
                                                  height: 24,
                                                  width: 24,
                                                  tintColor: "#fff",
                                                },
                                              }),
                                            })
                                          : null,
                                      ],
                                    }),
                                    (0, S.jsxs)(i.default, {
                                      style: { flexDirection: "row" },
                                      children: [
                                        (0, S.jsx)(h.default, {
                                          onPress: () =>
                                            n.navigate("FollowUser", {
                                              list: "following",
                                              userId: o,
                                            }),
                                          children: (0, S.jsxs)(i.default, {
                                            style: {
                                              alignItems: "center",
                                              paddingRight: 10,
                                              borderRightWidth: 1,
                                              borderColor: A.white,
                                            },
                                            children: [
                                              (0, S.jsx)(c.default, {
                                                style: z.Flonum,
                                                children: o?.following_count,
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: z.Flotext,
                                                children: "Following",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, S.jsx)(i.default, {
                                          style: { flexDirection: "row" },
                                          children: (0, S.jsx)(h.default, {
                                            onPress: () =>
                                              n.navigate("FollowUser", {
                                                list: "follower",
                                                userId: o,
                                              }),
                                            children: (0, S.jsxs)(i.default, {
                                              style: {
                                                alignItems: "center",
                                                paddingLeft: 10,
                                              },
                                              children: [
                                                (0, S.jsx)(c.default, {
                                                  style: z.Flonum,
                                                  children: o?.followers_count,
                                                }),
                                                (0, S.jsx)(c.default, {
                                                  style: z.Flotext,
                                                  children: "Followers",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, S.jsxs)(i.default, {
                                  style: [
                                    z.card,
                                    {
                                      maxWidth: I < 426 ? "auto" : 400,
                                      minWidth: I < 426 ? "auto" : 375,
                                    },
                                  ],
                                  children: [
                                    (0, S.jsx)(c.default, {
                                      style: z.title,
                                      children: "Personal Data:",
                                    }),
                                    (0, S.jsxs)(i.default, {
                                      style: z.grid,
                                      children: [
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.row,
                                            {
                                              justifyContent:
                                                I < 426
                                                  ? "flex-start"
                                                  : "space-between",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(c.default, {
                                              style: z.label,
                                              children: "County domicile:",
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: [
                                                z.data,
                                                {
                                                  width:
                                                    I < 426 ? "auto" : "50%",
                                                },
                                              ],
                                              children: o?.county_domicile,
                                            }),
                                          ],
                                        }),
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.row,
                                            {
                                              justifyContent:
                                                I < 426
                                                  ? "flex-start"
                                                  : "space-between",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(c.default, {
                                              style: z.label,
                                              children: "Email:",
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: [
                                                z.data,
                                                {
                                                  width:
                                                    I < 426 ? "auto" : "50%",
                                                },
                                              ],
                                              children: o?.email,
                                            }),
                                          ],
                                        }),
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.row,
                                            {
                                              justifyContent:
                                                I < 426
                                                  ? "flex-start"
                                                  : "space-between",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(c.default, {
                                              style: z.label,
                                              children: "Languages spoken:",
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: [
                                                z.data,
                                                {
                                                  width:
                                                    I < 426 ? "auto" : "50%",
                                                },
                                              ],
                                              children: o?.languages_spoken,
                                            }),
                                          ],
                                        }),
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.row,
                                            {
                                              justifyContent:
                                                I < 426
                                                  ? "flex-start"
                                                  : "space-between",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(c.default, {
                                              style: z.label,
                                              children: "Rates per hour:",
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: [
                                                z.data,
                                                {
                                                  width:
                                                    I < 426 ? "auto" : "50%",
                                                },
                                              ],
                                              children: o?.tarif_per_hour,
                                            }),
                                          ],
                                        }),
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.row,
                                            {
                                              justifyContent:
                                                I < 426
                                                  ? "flex-start"
                                                  : "space-between",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(c.default, {
                                              style: z.label,
                                              children: "Purpose of life:",
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: [
                                                z.data,
                                                {
                                                  width:
                                                    I < 426 ? "auto" : "50%",
                                                },
                                              ],
                                              children: o?.purpose_of_life,
                                            }),
                                          ],
                                        }),
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.row,
                                            {
                                              justifyContent:
                                                I < 426
                                                  ? "flex-start"
                                                  : "space-between",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(c.default, {
                                              style: z.label,
                                              children: "Hobby:",
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: [
                                                z.data,
                                                {
                                                  width:
                                                    I < 426 ? "auto" : "50%",
                                                },
                                              ],
                                              children: o?.hobbies,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, S.jsxs)(i.default, {
                          style: {
                            flexDirection: k ? "column" : "row",
                            marginTop: 20,
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                          },
                          children: [
                            (0, S.jsxs)(i.default, {
                              style: {
                                width: k ? "100%" : "30%",
                                alignItems: "center",
                              },
                              children: [
                                (0, S.jsxs)(x.default, {
                                  intensity: 70,
                                  style: {
                                    width: "100%",
                                    backgroundColor: "red",
                                    alignItems: "center",
                                    padding: 20,
                                    borderRadius: 32,
                                  },
                                  children: [
                                    (0, S.jsx)(c.default, {
                                      style: {
                                        color: A.white,
                                        fontFamily: "PoppinsMedium",
                                        fontSize: 23,
                                      },
                                    }),
                                    (0, S.jsx)(i.default, {
                                      style: {
                                        width: "100%",
                                        minHeight: 220,
                                        marginTop: 20,
                                      },
                                      children: (0, S.jsx)(f.default, {
                                        source: w.TokImage,
                                        style: {
                                          width: "100%",
                                          height: "100%",
                                          resizeMode: "contain",
                                        },
                                      }),
                                    }),
                                    (0, S.jsx)(i.default, {
                                      style: {
                                        width:
                                          (I < 1e3 && I > 800) || I < 426
                                            ? "100%"
                                            : "70%",
                                        backgroundColor: A.white,
                                        height: 40,
                                        alignItems: "center",
                                        borderRadius: 16,
                                        justifyContent: "center",
                                        marginTop: 17,
                                      },
                                      children: (0, S.jsx)(c.default, {
                                        style: {
                                          fontSize: 15,
                                          fontFamily: "PoppinsSemi",
                                          color: A.blue,
                                        },
                                        children: "Link to the content page",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, S.jsxs)(x.default, {
                                  intensity: 70,
                                  style: {
                                    width: "100%",
                                    backgroundColor: "red",
                                    alignItems: "center",
                                    padding: 20,
                                    borderRadius: 32,
                                    marginTop: 20,
                                  },
                                  children: [
                                    (0, S.jsx)(c.default, {
                                      style: {
                                        color: A.white,
                                        fontFamily: "PoppinsMedium",
                                        fontSize: 23,
                                      },
                                      children: "My communities",
                                    }),
                                    (0, S.jsx)(i.default, {
                                      style: {
                                        width:
                                          (I < 1e3 && I > 800) || I < 426
                                            ? "100%"
                                            : "70%",
                                        backgroundColor: A.white,
                                        height: 40,
                                        alignItems: "center",
                                        borderRadius: 16,
                                        justifyContent: "center",
                                        marginTop: 17,
                                      },
                                      children: (0, S.jsx)(c.default, {
                                        style: {
                                          fontSize: 15,
                                          fontFamily: "PoppinsSemi",
                                          color: A.blue,
                                        },
                                        children: "Link to the content page",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, S.jsxs)(i.default, {
                              style: {
                                width: k ? "100%" : "68%",
                                marginTop: k ? 20 : 0,
                                minWidth: 214,
                                gap: 20,
                              },
                              children: [
                                (0, S.jsxs)(x.default, {
                                  style: [
                                    z.rowData,
                                    {
                                      justifyContent:
                                        I < 1050
                                          ? "space-around"
                                          : "space-between",
                                      alignItems: "center",
                                      borderRadius: 22,
                                      paddingHorizontal: 15,
                                      paddingVertical: 10,
                                      flexWrap: "wrap",
                                      gap: 10,
                                    },
                                  ],
                                  intensity: 70,
                                  children: [
                                    (0, S.jsxs)(i.default, {
                                      style: [
                                        z.rowData,
                                        {
                                          flex: 1,
                                          flexWrap: "wrap",
                                          minWidth: 200,
                                          width: "100%",
                                          gap: 10,
                                          justifyContent:
                                            I < 550
                                              ? "space-around"
                                              : "flex-start",
                                        },
                                      ],
                                      children: [
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.rowData1,
                                            {
                                              flexDirection:
                                                I > 1e3 ? "row" : "column",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(f.default, {
                                              source: w.tip,
                                              style: z.rowImage,
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: z.rowText,
                                              children: "Give tip123",
                                            }),
                                          ],
                                        }),
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.rowData1,
                                            {
                                              flexDirection:
                                                I > 1e3 ? "row" : "column",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(f.default, {
                                              source: w.subsCription,
                                              style: z.rowImage,
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: z.rowText,
                                              children: "Subscription",
                                            }),
                                          ],
                                        }),
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.rowData1,
                                            {
                                              flexDirection:
                                                I > 1e3 ? "row" : "column",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(f.default, {
                                              source: w.mess,
                                              style: z.rowImage,
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: z.rowText,
                                              children: "Message",
                                            }),
                                          ],
                                        }),
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.rowData1,
                                            {
                                              flexDirection:
                                                I > 1e3 ? "row" : "column",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(f.default, {
                                              source: w.follow,
                                              style: z.rowImage,
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: z.rowText,
                                              children: "Follow",
                                            }),
                                          ],
                                        }),
                                        (0, S.jsxs)(i.default, {
                                          style: [
                                            z.rowData1,
                                            {
                                              flexDirection:
                                                I > 1e3 ? "row" : "column",
                                            },
                                          ],
                                          children: [
                                            (0, S.jsx)(f.default, {
                                              source: w.nottification,
                                              style: z.rowImage,
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: z.rowText,
                                              children: " ",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, S.jsxs)(i.default, {
                                      style: [
                                        z.rowData,
                                        {
                                          backgroundColor: A.white,
                                          height: 44,
                                          width: 84,
                                          borderRadius: 10,
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                          paddingHorizontal: 10,
                                        },
                                      ],
                                      children: [
                                        (0, S.jsx)(f.default, {
                                          source: w.beg,
                                          style: [
                                            z.rowImage,
                                            { tintColor: A.blue },
                                          ],
                                        }),
                                        (0, S.jsx)(f.default, {
                                          source: w.nottification,
                                          style: [
                                            z.rowImage,
                                            { tintColor: A.blue },
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o?.professional_experience?.length > 0 &&
                                  o?.professional_experience?.map((e, t) =>
                                    (0, S.jsxs)(
                                      x.default,
                                      {
                                        intensity: 70,
                                        style: {
                                          paddingHorizontal: 15,
                                          borderRadius: 22,
                                        },
                                        children: [
                                          (0, S.jsx)(c.default, {
                                            style: [
                                              z.useInfo,
                                              { marginTop: 20, fontSize: 20 },
                                            ],
                                            children: "Professional Experience",
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              paddingVertical: 10,
                                              borderBottomWidth: 1,
                                              borderColor: A.white,
                                              flexDirection: "row",
                                            },
                                            children: [
                                              (0, S.jsx)(i.default, {
                                                style: {
                                                  height: 9,
                                                  width: 9,
                                                  borderRadius: 100,
                                                  backgroundColor: A.white,
                                                  marginTop: 5,
                                                  marginRight: 5,
                                                },
                                              }),
                                              (0, S.jsxs)(i.default, {
                                                children: [
                                                  (0, S.jsx)(c.default, {
                                                    style: z.useInfo,
                                                    children: e.title,
                                                  }),
                                                  (0, S.jsx)(c.default, {
                                                    style: z.useInfo,
                                                    children: e.organization,
                                                  }),
                                                  (0, S.jsx)(c.default, {
                                                    style: z.useInfo,
                                                    children: e.duration,
                                                  }),
                                                  (0, S.jsx)(c.default, {
                                                    style: z.useInfo,
                                                    children: e.description,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              paddingVertical: 10,
                                              borderColor: A.white,
                                              flexDirection: "row",
                                            },
                                            children: [
                                              (0, S.jsx)(i.default, {
                                                style: {
                                                  height: 9,
                                                  width: 9,
                                                  borderRadius: 100,
                                                  backgroundColor: A.white,
                                                  marginTop: 5,
                                                  marginRight: 5,
                                                },
                                              }),
                                              (0, S.jsxs)(i.default, {
                                                style: {
                                                  width: "100%",
                                                  paddingRight: 20,
                                                },
                                                children: [
                                                  (0, S.jsx)(c.default, {
                                                    style: z.useInfo,
                                                    children: e.job_role,
                                                  }),
                                                  (0, S.jsx)(c.default, {
                                                    style: z.useInfo,
                                                    children: e.job_field,
                                                  }),
                                                  (0, S.jsx)(c.default, {
                                                    style: z.useInfo,
                                                    children: e.job_Duration,
                                                  }),
                                                  (0, S.jsx)(c.default, {
                                                    style: [
                                                      z.useInfo,
                                                      {
                                                        fontFamily:
                                                          "PoppinsRegular",
                                                      },
                                                    ],
                                                    ellipsizeMode: "tail",
                                                    numberOfLines: m ? 0 : 1,
                                                    children: e.job_Description,
                                                  }),
                                                  (0, S.jsx)(h.default, {
                                                    onPress: () => y(!m),
                                                    style: {
                                                      backgroundColor: A.white,
                                                      borderRadius: 16,
                                                      width: 100,
                                                      paddingVertical: 10,
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                      alignSelf: "flex-end",
                                                      margin: 10,
                                                    },
                                                    children: (0, S.jsx)(
                                                      c.default,
                                                      {
                                                        style: {
                                                          color: A.blue,
                                                          fontSize: 16,
                                                          fontFamily:
                                                            "PoppinsSemi",
                                                        },
                                                        children: m
                                                          ? "Hide"
                                                          : "Show more",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t.toString()
                                    )
                                  ),
                                (0, S.jsx)(h.default, {
                                  activeOpacity: 0.5,
                                  onPress: () =>
                                    (async () => {
                                      const e = await O(),
                                        t = `${C.LOGOUT}`,
                                        o = {};
                                      try {
                                        await j.default.removeItem(
                                          "access_token"
                                        ),
                                          console.log(
                                            "Token removed from AsyncStorage"
                                          ),
                                          n.navigate("AuthStack");
                                        const a = await v(t, o, e);
                                        200 === a.status
                                          ? (console.log("Logout successfully"),
                                            n.navigate("AuthStack"))
                                          : console.error(
                                              "Failed to logout from API:",
                                              a.status
                                            );
                                      } catch (a) {
                                        console.error(
                                          "Error during logout:",
                                          a
                                        );
                                      }
                                    })(),
                                  style: {
                                    backgroundColor: A.white,
                                    borderRadius: 16,
                                    width: 100,
                                    paddingVertical: 10,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    alignSelf: "flex-start",
                                  },
                                  children: (0, S.jsx)(c.default, {
                                    style: {
                                      color: A.blue,
                                      fontSize: 16,
                                      fontFamily: "PoppinsSemi",
                                    },
                                    children: "Logout",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          z = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            Flonum: { color: A.white, fontFamily: "PoppinsSemi", fontSize: 18 },
            Flotext: {
              color: A.white,
              fontFamily: "PoppinsRegular",
              fontSize: 16,
            },
            card: { width: "100%" },
            title: {
              fontSize: 18,
              fontWeight: "bold",
              color: "#fff",
              fontFamily: "PoppinsMedium",
            },
            grid: { marginTop: 10, width: "100%" },
            row: {
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
              justifyContent: "flex-start",
              flexWrap: "wrap",
            },
            label: { color: "#fff", marginLeft: 10, alignItems: "center" },
            data: { color: "#fff", marginLeft: 30, textAlign: "justify" },
            rowData: { flexDirection: "row", alignItems: "center" },
            rowData1: { alignItems: "center" },
            rowImage: { height: 24, width: 24, resizeMode: "contain" },
            rowText: {
              fontSize: 14,
              fontFamily: "PoppinsRegular",
              marginLeft: 10,
              marginRight: 10,
              color: A.white,
            },
            useInfo: {
              color: A.white,
              fontSize: 16,
              fontFamily: "PoppinsMedium",
              textAlign: "justify",
            },
          });
        var W = n(932),
          F = n(8264),
          _ = n(9557),
          L = n(9771);
        const V = () => {
            const e = (0, p.useNavigation)(),
              { width: t } = (0, s.default)(),
              n = t < 800;
            return (0, S.jsxs)(i.default, {
              style: [H.container, n && H.containerWrap],
              children: [
                (0, S.jsxs)(h.default, {
                  onPress: () => e.navigate("PublishPost"),
                  activeOpacity: 0.7,
                  style: [H.publishBox, n && H.fullWidth],
                  children: [
                    (0, S.jsxs)(i.default, {
                      style: H.publishContent,
                      children: [
                        (0, S.jsx)(f.default, {
                          tintColor: A.white,
                          source: w.publi,
                          style: H.rowImage,
                        }),
                        (0, S.jsx)(c.default, {
                          style: H.publishText,
                          children: "Publish Something",
                        }),
                      ],
                    }),
                    (0, S.jsx)(c.default, {
                      style: H.publishNote,
                      children: "(direct access to the creator tools)",
                    }),
                  ],
                }),
                (0, S.jsxs)(i.default, {
                  style: [H.rowData, n && H.alignRight],
                  children: [
                    (0, S.jsx)(f.default, {
                      source: w.filltern,
                      style: H.rowImage,
                    }),
                    (0, S.jsx)(c.default, {
                      style: H.filterText,
                      children: "Filter",
                    }),
                    (0, S.jsx)(f.default, {
                      source: w.sort,
                      style: H.rowImage,
                    }),
                    (0, S.jsx)(c.default, {
                      style: H.filterText,
                      children: "Sort by",
                    }),
                  ],
                }),
              ],
            });
          },
          H = a.default.create({
            container: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 15,
              minWidth: 230,
              width: "50%",
              alignSelf: "center",
              flexWrap: "nowrap",
              gap: 10,
            },
            containerWrap: { flexWrap: "wrap", width: "100%" },
            publishBox: {
              height: 67,
              borderStyle: "dotted",
              borderWidth: 1,
              borderColor: A.white,
              alignItems: "center",
              borderRadius: 16,
              paddingHorizontal: 20,
              justifyContent: "center",
              width: "70%",
            },
            publishContent: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
            publishText: {
              fontSize: 20,
              fontFamily: "PoppinsSemi",
              color: A.white,
            },
            publishNote: {
              fontSize: 14,
              fontFamily: "PoppinsRegular",
              color: A.white,
            },
            rowData: {
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: A.white,
              height: 67,
              borderRadius: 10,
              justifyContent: "space-between",
              paddingHorizontal: 10,
            },
            alignRight: { alignSelf: "flex-end", marginTop: 10 },
            rowImage: {
              height: 24,
              width: 24,
              resizeMode: "contain",
              tintColor: A.blue,
              marginHorizontal: 4,
            },
            filterText: {
              fontSize: 14,
              fontFamily: "PoppinsRegular",
              color: A.blue,
              marginHorizontal: 4,
            },
            fullWidth: { width: "100%", alignSelf: "flex-start" },
          });
        var Y = n(6773);
        const G = ({ placeholder: e = "Search box", onSearch: t }) => {
            const [n, o] = (0, d.useState)(""),
              { width: a } = (0, s.default)(),
              r = a < 800;
            return (0, S.jsxs)(i.default, {
              style: [Q.container, r && Q.smallContainer],
              children: [
                (0, S.jsx)(f.default, { source: w.search, style: Q.icon }),
                (0, S.jsx)(Y.default, {
                  value: n,
                  onChangeText: o,
                  placeholder: e,
                  placeholderTextColor: A.white,
                  style: Q.input,
                }),
                (0, S.jsx)(h.default, {
                  onPress: () => {
                    t && (t(n), o(""));
                  },
                  style: Q.searchButton,
                  children: (0, S.jsx)(c.default, {
                    style: Q.searchText,
                    children: "Search",
                  }),
                }),
              ],
            });
          },
          Q = a.default.create({
            container: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 14,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: A.white,
              width: "44%",
              minWidth: 100,
              alignSelf: "center",
              padding: 10,
              gap: 10,
            },
            smallContainer: { width: "90%" },
            icon: { height: 17.5, width: 17.5, resizeMode: "contain" },
            input: {
              flex: 1,
              height: 44,
              color: A.white,
              borderRadius: 16,
              fontSize: 14,
              fontFamily: "PoppinsRegular",
              outlineStyle: "none",
              minWidth: 100,
            },
            searchButton: {
              backgroundColor: A.white,
              height: 35,
              paddingHorizontal: 15,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            },
            searchText: {
              fontSize: 14,
              fontFamily: "PoppinsRegular",
              color: A.blue,
              textAlign: "center",
            },
          });
        var X = n(7537),
          J = n(2914);
        const { width: K } = u.default.get("window"),
          q = ({ media: e, showDotIndicator: t = !0 }) => {
            const [o, a] = (0, d.useState)(0),
              r = (0, d.useRef)(null),
              [l, s] = (0, d.useState)(!1),
              [u, g] = (0, d.useState)(null),
              m = (e) => {
                switch (e) {
                  case "pdf":
                    return n(1577);
                  case "word":
                    return n(4785);
                  case "excel":
                    return n(2862);
                  case "ppt":
                    return n(8149);
                  case "text":
                  default:
                    return n(7993);
                  case "link":
                    return n(5945);
                  case "podcast":
                    return n(7019);
                }
              },
              p = (e) => {
                g(e), s(!0);
              };
            return (0, S.jsxs)(i.default, {
              style: Z.container,
              children: [
                (0, S.jsx)(X.default, {
                  ref: r,
                  width: K - 40,
                  height: 200,
                  data: e,
                  autoPlay: !0,
                  autoPlayInterval: 3e3,
                  loop: !0,
                  snapEnabled: !1,
                  scrollAnimationDuration: 800,
                  onSnapToItem: a,
                  renderItem: ({ item: e }) =>
                    ((e) => {
                      switch (e.media_type) {
                        case "photo":
                          return (0, S.jsx)(h.default, {
                            onPress: () => p(e),
                            children: (0, S.jsx)(f.default, {
                              source: { uri: `${b}${e.files}` },
                              style: Z.image,
                            }),
                          });
                        case "video":
                          return (0, S.jsx)(h.default, {
                            onPress: () => p(e),
                            style: {
                              width: "100%",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: (0, S.jsx)(_.default, {
                              source: { uri: `${b}${e.files}` },
                              style: [
                                Z.image,
                                {
                                  width: 350,
                                  backgroundColor: "red",
                                  alignSelf: "center",
                                },
                              ],
                              isMuted: !0,
                              shouldPlay: !0,
                            }),
                          });
                        case "pdf":
                        case "word":
                        case "excel":
                        case "ppt":
                        case "text":
                        case "link":
                        case "podcast":
                          return (0, S.jsx)(i.default, {
                            style: [Z.image, Z.iconContainer],
                            children: (0, S.jsx)(f.default, {
                              source: m(e.media_type),
                              style: Z.image,
                            }),
                          });
                        default:
                          return (0, S.jsxs)(i.default, {
                            style: [Z.image, Z.iconContainer],
                            children: [
                              (0, S.jsx)(J.default, {
                                name: "alert-circle-outline",
                                size: 50,
                                color: "#999",
                              }),
                              (0, S.jsx)(c.default, {
                                style: Z.iconLabel,
                                children: "Unsupported",
                              }),
                            ],
                          });
                      }
                    })(e),
                  panGestureHandlerProps: { enabled: e.length > 1 },
                }),
                t &&
                  (0, S.jsx)(i.default, {
                    style: Z.dotsContainer,
                    children: e.map((e, t) =>
                      (0, S.jsx)(
                        h.default,
                        {
                          onPress: () =>
                            ((e) => {
                              a(e),
                                r.current?.scrollTo?.({
                                  index: e,
                                  animated: !0,
                                });
                            })(t),
                          style: [Z.dot, o === t && Z.activeDot],
                        },
                        t
                      )
                    ),
                  }),
                l &&
                  u &&
                  (0, S.jsx)(F.default, {
                    visible: !0,
                    transparent: !0,
                    children: (0, S.jsxs)(x.default, {
                      intensity: 70,
                      style: Z.fullscreenContainer,
                      tint: "dark",
                      children: [
                        (0, S.jsx)(h.default, {
                          style: Z.closeButton,
                          onPress: () => s(!1),
                          children: (0, S.jsx)(J.default, {
                            name: "close",
                            size: 30,
                            color: "#fff",
                          }),
                        }),
                        "photo" === u.media_type
                          ? (0, S.jsx)(f.default, {
                              source: { uri: `${b}${u.files}` },
                              style: Z.fullscreenImage,
                            })
                          : (0, S.jsx)(_.default, {
                              source: { uri: `${b}${u.files}` },
                              style: Z.fullscreenImage,
                              useNativeControls: !0,
                              resizeMode: "contain",
                              shouldPlay: !0,
                            }),
                      ],
                    }),
                  }),
              ],
            });
          },
          Z = a.default.create({
            container: {
              alignItems: "center",
              marginTop: 10,
              marginHorizontal: 20,
              borderRadius: 10,
              height: 300,
              justifyContent: "center",
            },
            image: {
              width: "100%",
              height: 200,
              borderRadius: 12,
              resizeMode: "contain",
            },
            iconContainer: {
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            },
            iconLabel: {
              fontSize: 12,
              color: "#555",
              marginTop: 5,
              textAlign: "center",
            },
            dotsContainer: { flexDirection: "row", marginTop: 10 },
            dot: {
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: "#ccc",
            },
            activeDot: { backgroundColor: "#333" },
            fullscreenContainer: {
              flex: 1,
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
            },
            fullscreenImage: {
              width: "80%",
              height: "80%",
              resizeMode: "contain",
              borderRadius: 10,
            },
            closeButton: {
              position: "absolute",
              top: 40,
              right: 20,
              zIndex: 1,
            },
          });
        var $ = n(5381);
        const ee = ({
            value: e,
            onChangeText: t,
            placeholder: n = null,
            keyboardType: o = "default",
            placeholderTextColor: a,
            multiline: r = !1,
            numberOfLines: l = 1,
            error: s = null,
            inputStyle: d,
          }) =>
            (0, S.jsxs)(i.default, {
              style: te.inputView,
              children: [
                (0, S.jsx)(Y.default, {
                  autoCapitalize: "none",
                  keyboardType: o,
                  style: [te.input, te.inputWeb, Object.assign({}, d)],
                  placeholder: n,
                  placeholderTextColor: a,
                  value: e ?? "",
                  onChangeText: (e) => t(e),
                  multiline: r,
                  numberOfLines: l,
                }),
                !!s &&
                  (0, S.jsx)(i.default, {
                    style: { width: "100%" },
                    children: (0, S.jsx)(c.default, {
                      style: te.errorText,
                      children: s,
                    }),
                  }),
              ],
            }),
          te = a.default.create({
            inputView: { borderWidth: 0 },
            input: {
              width: "100%",
              minWidth: 200,
              borderRadius: 8,
              minHeight: 45,
              paddingHorizontal: 40,
              borderColor: A.primarybordercolor,
              fontFamily: y.PoppinsMedium,
              alignItems: "flex-start",
              backgroundColor: A.white,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            },
            inputWeb: {},
            errorText: {
              fontSize: 10,
              color: "red",
              fontFamily: y.PoppinsMedium,
              marginVertical: 5,
              textAlign: "left",
            },
          }),
          ne = () => {
            const [e, t] = (0, d.useState)([]),
              [o, u] = (0, d.useState)(null),
              [y, b] = (0, d.useState)([]);
            console.log("\ud83d\ude80 ~ postData:", y);
            const [j, I] = (0, d.useState)(),
              [E, k] = (0, d.useState)(null),
              [N, z] = (0, d.useState)([]),
              [H, Y] = (0, d.useState)(!1),
              [Q, X] = (0, d.useState)(null),
              [K, Z] = (0, d.useState)([]),
              { width: te } = (0, s.default)(),
              [ne, ae] = (0, d.useState)([]),
              ie = te < 800,
              re = te < 426,
              [le, se] = (0, d.useState)(!1),
              [de, ce] = (0, d.useState)(null),
              ue = (0, p.useIsFocused)(),
              fe = async (n, o) => {
                const a = await O(),
                  i = `${C.REACTION_CONTENT + n}/`,
                  r = { action: o };
                try {
                  const n = await v(i, r, a),
                    o = n.data.data;
                  if (200 === n.status) {
                    const n = e.map((e) =>
                      e.id === o.post_id
                        ? Object.assign({}, e, {
                            disliked: o.disliked,
                            liked: o.liked,
                          })
                        : e
                    );
                    t(n);
                  }
                } catch (l) {
                  console.error("res error ===---\x3e>>", l);
                }
              },
              he = (e) => {
                j == e
                  ? (z(null), I(null))
                  : (z(null),
                    (async (e) => {
                      const t = await O(),
                        n = `${C.GET_CONTENT_COMMENT}${e}`;
                      try {
                        const e = await P(n, t);
                        z(e.data.data);
                      } catch (o) {
                        console.error("error get comment :>> ", o);
                      }
                    })(e),
                    I(e),
                    k(null));
              },
              ge = async () => {
                if (navigator.share)
                  try {
                    await navigator.share({
                      title: "My App",
                      text: "Check out this awesome app: https://example.com",
                      url: "https://example.com",
                    });
                  } catch (e) {
                    m.default.alert("Error", e.message);
                  }
                else
                  m.default.alert(
                    "Share not supported",
                    "Your browser does not support Web Share API."
                  );
              };
            (0, d.useEffect)(() => {
              O();
            }, []),
              (0, d.useEffect)(() => {
                (() => {
                  const t = [],
                    n = [];
                  console.log(
                    "\ud83d\ude80 ~ videoSection ~ postsWithOtherMedia:",
                    n
                  ),
                    e?.forEach((e) => {
                      const o =
                          e.media?.filter((e) => "video" === e.media_type) ||
                          [],
                        a =
                          e.media?.filter((e) => "video" !== e.media_type) ||
                          [];
                      o.length > 0 &&
                        t.push(Object.assign({}, e, { media: o })),
                        a.length > 0 &&
                          n.push(Object.assign({}, e, { media: a }));
                    }),
                    n.sort(
                      (e, t) => new Date(t.updated_at) - new Date(e.updated_at)
                    );
                  const o = n.filter((e) => !0 === e.is_free);
                  b(o), Z(t);
                })();
              }, [e]),
              (0, d.useEffect)(() => {
                (async () => {
                  const e = await O(),
                    n = C.ALL_USER_CONTENT_LIST;
                  try {
                    const o = await P(n, e);
                    204 === o.status
                      ? u({
                          status: 204,
                          message: "No content has been posted yet.",
                        })
                      : (u(null),
                        t(o.data.data),
                        console.log("response.data.data==>>", o.data.data));
                  } catch (o) {
                    console.error("Error get post data:", o);
                  }
                })(),
                  (async () => {
                    const e = await O(),
                      t = `${C.GET_VIDEOS}`;
                    console.log("\ud83d\ude80 ~ getSuggesteVideo ~ URL:", t);
                    try {
                      const n = await P(t, e);
                      console.log(
                        "\ud83d\ude80 ~ getSuggesteVideo ~ response:11",
                        n.data.data
                      ),
                        ae(n.data.data);
                    } catch (n) {
                      console.error("error get getSuggesteVideo :>> ", n);
                    }
                  })();
              }, [ue]);
            const me = (0, p.useNavigation)();
            return (0, S.jsxs)(l.default, {
              style: oe.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: oe.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: oe.scrollableContentContainer,
                  children: [
                    (0, S.jsx)(T, {}),
                    (0, S.jsx)(B, {}),
                    (0, S.jsxs)(i.default, {
                      style: { flex: 1, width: "100%" },
                      children: [
                        (0, S.jsx)(V, {}),
                        (0, S.jsx)(x.default, {
                          intensity: 70,
                          style: oe.blurViewContainer,
                          children: (0, S.jsxs)(i.default, {
                            style: oe.innerContainer,
                            children: [
                              (0, S.jsx)(G, {
                                placeholder: "Search Box",
                                onSearch: async (e) => {
                                  const n = await O(),
                                    o = `${C.SEARCH_CONTENT}${e}`;
                                  try {
                                    const e = await P(o, n);
                                    if (e.data.data.length > 0)
                                      console.log(
                                        "it is working here search 2222"
                                      ),
                                        u(null),
                                        t(e.data.data);
                                    else {
                                      console.log("it is working error");
                                      u({
                                        status: 204,
                                        message: "No results found.",
                                      });
                                    }
                                  } catch (a) {
                                    console.error("API search error:", a);
                                  }
                                },
                              }),
                              204 == o?.status
                                ? (0, S.jsx)(i.default, {
                                    style: oe.noConetView,
                                    children: (0, S.jsx)(c.default, {
                                      style: oe.noConetTxt,
                                      children: o.message,
                                    }),
                                  })
                                : (0, S.jsx)(W.default, {
                                    data: y,
                                    keyExtractor: (e) => e.id.toString(),
                                    style: [
                                      oe.scrollContainer,
                                      ie && oe.scrollContainerSmall,
                                    ],
                                    contentContainerStyle: oe.contentContainer,
                                    scrollEnabled: !0,
                                    nestedScrollEnabled: !0,
                                    renderItem: ({ item: n }) =>
                                      (0, S.jsxs)(
                                        i.default,
                                        {
                                          style: oe.dataItem,
                                          children: [
                                            (0, S.jsxs)(i.default, {
                                              style: [
                                                oe.itemHeader,
                                                ie && oe.samallItemHeader,
                                              ],
                                              children: [
                                                (0, S.jsx)(c.default, {
                                                  onPress: () =>
                                                    me.navigate("Profile", {
                                                      id: n.creator_id,
                                                    }),
                                                  style: oe.userInfo,
                                                  children: n?.creator_name,
                                                }),
                                                (0, S.jsxs)(i.default, {
                                                  style: oe.shareSaveContainer,
                                                  children: [
                                                    (0, S.jsx)(g.default, {
                                                      onPress: ge,
                                                      children: (0, S.jsx)(
                                                        f.default,
                                                        {
                                                          source: w.share,
                                                          style: oe.iconLarge,
                                                        }
                                                      ),
                                                    }),
                                                    (0, S.jsx)(h.default, {
                                                      onPress: () =>
                                                        (async (n) => {
                                                          const o = await O(),
                                                            a = {
                                                              content_id: n,
                                                            },
                                                            i = C.SAVE_CONTENT,
                                                            r =
                                                              await Promise.all(
                                                                e.map(
                                                                  async (e) => {
                                                                    if (
                                                                      e.id === n
                                                                    )
                                                                      if (
                                                                        e.is_saved
                                                                      )
                                                                        try {
                                                                          const t =
                                                                            await R.default.delete(
                                                                              C.REMOVE_CONTENT,
                                                                              {
                                                                                data: {
                                                                                  content_id:
                                                                                    n,
                                                                                },
                                                                                headers:
                                                                                  {
                                                                                    Authorization: `Bearer ${o}`,
                                                                                  },
                                                                              }
                                                                            );
                                                                          if (
                                                                            (t
                                                                              .data
                                                                              .data,
                                                                            204 ===
                                                                              t.status)
                                                                          )
                                                                            return Object.assign(
                                                                              {},
                                                                              e,
                                                                              {
                                                                                is_saved:
                                                                                  !1,
                                                                              }
                                                                            );
                                                                        } catch (t) {
                                                                          console.error(
                                                                            "Error removing content for post ID:",
                                                                            n,
                                                                            t
                                                                          );
                                                                        }
                                                                      else
                                                                        try {
                                                                          const t =
                                                                              await v(
                                                                                i,
                                                                                a,
                                                                                o
                                                                              ),
                                                                            n =
                                                                              t
                                                                                .data
                                                                                .data;
                                                                          if (
                                                                            201 ===
                                                                              t.status &&
                                                                            e.id ===
                                                                              n
                                                                                .content
                                                                                .id
                                                                          )
                                                                            return Object.assign(
                                                                              {},
                                                                              e,
                                                                              {
                                                                                is_saved:
                                                                                  !0,
                                                                              }
                                                                            );
                                                                        } catch (t) {
                                                                          console.error(
                                                                            "Error saving content for post ID:",
                                                                            n,
                                                                            t
                                                                          );
                                                                        }
                                                                    return e;
                                                                  }
                                                                )
                                                              );
                                                          t(r);
                                                        })(n.id),
                                                      children: (0, S.jsx)(
                                                        f.default,
                                                        {
                                                          source: w.star,
                                                          style: {
                                                            width: 20,
                                                            height: 20,
                                                            marginHorizontal: 3,
                                                            tintColor:
                                                              n.is_saved
                                                                ? void 0
                                                                : "White",
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, S.jsxs)(i.default, {
                                              style: oe.itemSubHeader,
                                              children: [
                                                (0, S.jsx)(f.default, {
                                                  source: w.comment,
                                                  style: oe.iconTiny,
                                                }),
                                                (0, S.jsx)(c.default, {
                                                  style: oe.commentText,
                                                  children: "Comment",
                                                }),
                                              ],
                                            }),
                                            (0, S.jsx)(i.default, {
                                              style: oe.descriptionWrapper,
                                              children: (0, S.jsx)(c.default, {
                                                style: oe.itemDescription,
                                                numberOfLines: 2,
                                                children: n.description,
                                              }),
                                            }),
                                            (0, S.jsx)(q, {
                                              media: n.media,
                                              showDotIndicator:
                                                n.media.length > 1,
                                            }),
                                            (0, S.jsxs)(i.default, {
                                              style: [
                                                oe.actionsRow,
                                                {
                                                  paddingHorizontal: re
                                                    ? 0
                                                    : 20,
                                                },
                                              ],
                                              children: [
                                                (0, S.jsx)(i.default, {
                                                  style: { flex: re ? 0 : 1 },
                                                }),
                                                (0, S.jsxs)(h.default, {
                                                  style: oe.commentButton,
                                                  onPress: () => he(n.id),
                                                  children: [
                                                    (0, S.jsx)(f.default, {
                                                      source: w.comment,
                                                      style: oe.iconTiny,
                                                    }),
                                                    (0, S.jsx)(c.default, {
                                                      style: { color: "#fff" },
                                                      children: "Comment",
                                                    }),
                                                  ],
                                                }),
                                                (0, S.jsxs)(i.default, {
                                                  style: oe.likeContainer,
                                                  children: [
                                                    (0, S.jsx)(h.default, {
                                                      onPress: () =>
                                                        fe(n.id, "like"),
                                                      children: (0, S.jsx)(
                                                        $.default,
                                                        {
                                                          name: "like1",
                                                          color: n.liked
                                                            ? A.likeBlue
                                                            : A.white,
                                                          size: 20,
                                                        }
                                                      ),
                                                    }),
                                                    (0, S.jsx)(h.default, {
                                                      onPress: () =>
                                                        fe(n.id, "dislike"),
                                                      children: (0, S.jsx)(
                                                        $.default,
                                                        {
                                                          name: "dislike1",
                                                          color: n.disliked
                                                            ? A.likeBlue
                                                            : A.white,
                                                          size: 20,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            j == n.id &&
                                              (0, S.jsxs)(i.default, {
                                                style: oe.commentContainer,
                                                children: [
                                                  (0, S.jsxs)(i.default, {
                                                    style: oe.commentInput,
                                                    children: [
                                                      (0, S.jsx)(i.default, {
                                                        style:
                                                          oe.commentInputText,
                                                        children: (0, S.jsx)(
                                                          ee,
                                                          {
                                                            placeholder:
                                                              "Comment",
                                                            placeholderTextColor:
                                                              A.lightBlack,
                                                            value: E,
                                                            onChangeText: k,
                                                            keyboardType:
                                                              "ascii-capable",
                                                          }
                                                        ),
                                                      }),
                                                      (0, S.jsx)(h.default, {
                                                        onPress: () =>
                                                          H
                                                            ? (async () => {
                                                                if (!Q) return;
                                                                const e =
                                                                    await O(),
                                                                  t = `${C.EDIT_CONTENT_COMMENT}${Q}/`,
                                                                  n = {
                                                                    text: E,
                                                                  };
                                                                k(null);
                                                                try {
                                                                  const o =
                                                                      await M(
                                                                        t,
                                                                        n,
                                                                        e
                                                                      ),
                                                                    a = N.map(
                                                                      (e) =>
                                                                        e.id ===
                                                                        o.data
                                                                          .data
                                                                          .id
                                                                          ? Object.assign(
                                                                              {},
                                                                              e,
                                                                              {
                                                                                text: o
                                                                                  .data
                                                                                  .data
                                                                                  .text,
                                                                              }
                                                                            )
                                                                          : e
                                                                    );
                                                                  z(a),
                                                                    Y(!1),
                                                                    X(null),
                                                                    k("");
                                                                } catch (o) {
                                                                  console.error(
                                                                    "error comment create :>> ",
                                                                    o
                                                                  );
                                                                }
                                                              })()
                                                            : (async (e) => {
                                                                const t =
                                                                    await O(),
                                                                  n =
                                                                    C.CREATE_CONTENT_COMMENT,
                                                                  o = {
                                                                    content: e,
                                                                    text: E,
                                                                  };
                                                                if (E) {
                                                                  k("");
                                                                  try {
                                                                    const e = (
                                                                      await v(
                                                                        n,
                                                                        o,
                                                                        t
                                                                      )
                                                                    ).data.data;
                                                                    if (
                                                                      N &&
                                                                      N.length >
                                                                        0
                                                                    ) {
                                                                      const t =
                                                                        N?.filter(
                                                                          (t) =>
                                                                            t.id !==
                                                                            e.id
                                                                        );
                                                                      z([
                                                                        e,
                                                                        ...t,
                                                                      ]);
                                                                    } else
                                                                      z([e]);
                                                                  } catch (a) {
                                                                    console.error(
                                                                      "error comment create :>> ",
                                                                      a
                                                                    );
                                                                  }
                                                                } else
                                                                  console.log(
                                                                    "Empty input"
                                                                  );
                                                              })(n.id),
                                                        style:
                                                          oe.commentSubmitBtn,
                                                        children: (0, S.jsx)(
                                                          c.default,
                                                          {
                                                            children: H
                                                              ? "Update"
                                                              : "Submit",
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, S.jsx)(i.default, {
                                                    style:
                                                      oe.commentBorderDivider,
                                                  }),
                                                  (0, S.jsxs)(i.default, {
                                                    style: { gap: 10 },
                                                    children: [
                                                      (0, S.jsx)(c.default, {
                                                        style: oe.commentTitle,
                                                        children: "Comments",
                                                      }),
                                                      N && N.length > 0
                                                        ? (0, S.jsx)(
                                                            W.default,
                                                            {
                                                              data: N,
                                                              contentContainerStyle:
                                                                oe.flatListContent,
                                                              scrollEnabled: !1,
                                                              nestedScrollEnabled:
                                                                !0,
                                                              keyExtractor: (
                                                                e
                                                              ) =>
                                                                e.id.toString(),
                                                              renderItem: (e) =>
                                                                (0, S.jsxs)(
                                                                  i.default,
                                                                  {
                                                                    style:
                                                                      oe.commentBox,
                                                                    children: [
                                                                      (0,
                                                                      S.jsx)(
                                                                        c.default,
                                                                        {
                                                                          style:
                                                                            oe.commentUser,
                                                                          children:
                                                                            e
                                                                              .item
                                                                              .user,
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      S.jsx)(
                                                                        c.default,
                                                                        {
                                                                          style:
                                                                            oe.commentBoxText,
                                                                          children:
                                                                            e
                                                                              .item
                                                                              .text,
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      S.jsxs)(
                                                                        i.default,
                                                                        {
                                                                          style:
                                                                            oe.alignCommentIcons,
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              S.jsx)(
                                                                                h.default,
                                                                                {
                                                                                  onPress:
                                                                                    () => {
                                                                                      (async (
                                                                                        e
                                                                                      ) => {
                                                                                        const t =
                                                                                            await O(),
                                                                                          n =
                                                                                            C.CONTENT_COMMENT_REACTION,
                                                                                          o =
                                                                                            {
                                                                                              comment_id:
                                                                                                e,
                                                                                            };
                                                                                        try {
                                                                                          const a =
                                                                                              await v(
                                                                                                n,
                                                                                                o,
                                                                                                t
                                                                                              ),
                                                                                            i =
                                                                                              N.map(
                                                                                                (
                                                                                                  t
                                                                                                ) =>
                                                                                                  t.id ===
                                                                                                  e
                                                                                                    ? Object.assign(
                                                                                                        {},
                                                                                                        t,
                                                                                                        {
                                                                                                          liked_by:
                                                                                                            a
                                                                                                              .data
                                                                                                              .data
                                                                                                              .liked,
                                                                                                        }
                                                                                                      )
                                                                                                    : t
                                                                                              );
                                                                                          z(
                                                                                            i
                                                                                          );
                                                                                        } catch (a) {
                                                                                          console.error(
                                                                                            "error comment reaction :>> ",
                                                                                            a
                                                                                          );
                                                                                        }
                                                                                      })(
                                                                                        e
                                                                                          .item
                                                                                          .id
                                                                                      );
                                                                                    },
                                                                                  children:
                                                                                    (0,
                                                                                    S.jsx)(
                                                                                      $.default,
                                                                                      {
                                                                                        name: "like1",
                                                                                        color:
                                                                                          e
                                                                                            .item
                                                                                            .liked_by
                                                                                            ? A.likeBlue
                                                                                            : A.white,
                                                                                        size: 20,
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              S.jsx)(
                                                                                h.default,
                                                                                {
                                                                                  onPress:
                                                                                    () => {
                                                                                      (async (
                                                                                        e
                                                                                      ) => {
                                                                                        Y(
                                                                                          !0
                                                                                        ),
                                                                                          X(
                                                                                            e
                                                                                          );
                                                                                        const t =
                                                                                          N.find(
                                                                                            (
                                                                                              t
                                                                                            ) =>
                                                                                              t.id ==
                                                                                              e
                                                                                          );
                                                                                        k(
                                                                                          t.text
                                                                                        );
                                                                                      })(
                                                                                        e
                                                                                          .item
                                                                                          .id
                                                                                      );
                                                                                    },
                                                                                  children:
                                                                                    (0,
                                                                                    S.jsx)(
                                                                                      $.default,
                                                                                      {
                                                                                        name: "edit",
                                                                                        color:
                                                                                          A.white,
                                                                                        size: 20,
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              S.jsx)(
                                                                                h.default,
                                                                                {
                                                                                  onPress:
                                                                                    () => {
                                                                                      (async (
                                                                                        e
                                                                                      ) => {
                                                                                        const t =
                                                                                            await O(),
                                                                                          n = `${C.DELETE_CONTENT_COMMENT}${e}/`;
                                                                                        try {
                                                                                          await U(
                                                                                            n,
                                                                                            t
                                                                                          );
                                                                                          const o =
                                                                                            N.filter(
                                                                                              (
                                                                                                t
                                                                                              ) =>
                                                                                                t.id !==
                                                                                                e
                                                                                            );
                                                                                          z(
                                                                                            o
                                                                                          );
                                                                                        } catch (o) {
                                                                                          console.error(
                                                                                            "error comment reaction :>> ",
                                                                                            o
                                                                                          );
                                                                                        }
                                                                                      })(
                                                                                        e
                                                                                          .item
                                                                                          .id
                                                                                      );
                                                                                    },
                                                                                  children:
                                                                                    (0,
                                                                                    S.jsx)(
                                                                                      $.default,
                                                                                      {
                                                                                        name: "delete",
                                                                                        color:
                                                                                          A.white,
                                                                                        size: 20,
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ItemSeparatorComponent:
                                                                () =>
                                                                  (0, S.jsx)(
                                                                    i.default,
                                                                    {
                                                                      style: [
                                                                        oe.commentBorderDivider,
                                                                        {
                                                                          height: 20,
                                                                          marginBottom: 10,
                                                                        },
                                                                      ],
                                                                    }
                                                                  ),
                                                            }
                                                          )
                                                        : (0, S.jsx)(
                                                            i.default,
                                                            {
                                                              children: (0,
                                                              S.jsx)(
                                                                c.default,
                                                                {
                                                                  style: {
                                                                    textAlign:
                                                                      "center",
                                                                    color:
                                                                      A.white,
                                                                  },
                                                                  children:
                                                                    "No comments",
                                                                }
                                                              ),
                                                            }
                                                          ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                          ],
                                        },
                                        n.id
                                      ),
                                  }),
                              ne.length > 0 &&
                                (0, S.jsxs)(x.default, {
                                  intensity: 70,
                                  style: [
                                    oe.sliderContainer,
                                    ie && oe.smallSliderContainer,
                                    { marginBottom: 10 },
                                  ],
                                  children: [
                                    (0, S.jsx)(i.default, {
                                      style: oe.itemHeader,
                                      children: (0, S.jsx)(c.default, {
                                        style: oe.userInfo,
                                        children: "Videos for you (reels)",
                                      }),
                                    }),
                                    (0, S.jsx)(W.default, {
                                      data: ne,
                                      renderItem: ({ item: e }) =>
                                        (0, S.jsx)(i.default, {
                                          style: [
                                            oe.reelContainer,
                                            { width: 300 },
                                          ],
                                          children: (0, S.jsxs)(h.default, {
                                            onPress: () =>
                                              ((e) => {
                                                ce(e), se(!0);
                                              })(e),
                                            style: oe.videoPlaceholder,
                                            children: [
                                              (0, S.jsx)(_.default, {
                                                source: { uri: e.video_url },
                                                style: oe.video,
                                                shouldPlay: !0,
                                                resizeMode:
                                                  L.ResizeMode.STRETCH,
                                                isMuted: !0,
                                              }),
                                              (0, S.jsx)(D.LinearGradient, {
                                                colors: [
                                                  "rgba(0,0,0,0.0)",
                                                  "rgba(0,0,0,0.0)",
                                                  "rgba(0,0,0,0.0)",
                                                  "rgba(0,0,0,0.8)",
                                                  "rgba(0,0,0,0.8)",
                                                ],
                                                style: oe.gradientOverlay,
                                                start: { x: 0, y: 0 },
                                                end: { x: 0, y: 2 },
                                              }),
                                              (0, S.jsxs)(i.default, {
                                                style: oe.reactionsContainer,
                                                children: [
                                                  (0, S.jsxs)(i.default, {
                                                    style: [
                                                      oe.reactionsContainer,
                                                      { bottom: 25 },
                                                    ],
                                                    children: [
                                                      (0, S.jsx)(f.default, {
                                                        source: {
                                                          uri: e?.profile_image,
                                                        },
                                                        style: {
                                                          height: 25,
                                                          width: 25,
                                                          borderRadius: 4,
                                                        },
                                                      }),
                                                      (0, S.jsx)(c.default, {
                                                        numberOfLines: 1,
                                                        style: {
                                                          marginLeft: 10,
                                                          color: A.white,
                                                          fontSize: 19,
                                                        },
                                                        children: e?.title,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, S.jsx)(i.default, {
                                                    style:
                                                      oe.reactionsContainer,
                                                  }),
                                                  (0, S.jsx)(f.default, {
                                                    source: n(7003),
                                                    style: oe.reactionIcon,
                                                  }),
                                                  (0, S.jsx)(f.default, {
                                                    source: n(8559),
                                                    style: oe.reactionIcon,
                                                  }),
                                                  (0, S.jsx)(f.default, {
                                                    source: n(2942),
                                                    style: oe.reactionIcon,
                                                  }),
                                                  (0, S.jsx)(c.default, {
                                                    style: oe.reactionCount,
                                                    children: "1.7K",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      keyExtractor: (e) => e.id,
                                      horizontal: !0,
                                      showsHorizontalScrollIndicator: !1,
                                      contentContainerStyle: oe.mobileList,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    le &&
                      de &&
                      (0, S.jsx)(F.default, {
                        visible: !0,
                        transparent: !0,
                        children: (0, S.jsxs)(x.default, {
                          tint: "dark",
                          intensity: 70,
                          style: oe.fullscreenContainer,
                          children: [
                            (0, S.jsx)(h.default, {
                              style: oe.closeButton,
                              onPress: () => se(!1),
                              children: (0, S.jsx)(J.default, {
                                name: "close",
                                size: 30,
                                color: "#fff",
                              }),
                            }),
                            "photo" === de.media_type
                              ? (0, S.jsx)(f.default, {
                                  source: { uri: de.video_url },
                                  style: oe.fullscreenImage,
                                })
                              : (0, S.jsx)(_.default, {
                                  source: { uri: de.video_url },
                                  style: oe.fullscreenImage,
                                  useNativeControls: !0,
                                  resizeMode: L.ResizeMode.COVER,
                                  shouldPlay: !0,
                                }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            });
          },
          oe = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            container: { flex: 1 },
            blurViewContainer: {
              flex: 1,
              borderRadius: 32,
              alignItems: "center",
              minHeight: 380,
            },
            innerContainer: {
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            },
            noConetView: {
              flex: 1,
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            },
            noConetTxt: {
              color: A.white,
              width: "100%",
              textAlign: "center",
              fontSize: 22,
            },
            scrollContainerSmall: { width: "90%" },
            scrollContainer: { width: "60%", flexGrow: 0 },
            contentContainer: { width: "100%" },
            dataItem: {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: 10,
              marginVertical: 5,
              borderRadius: 25,
            },
            itemHeader: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 5,
              width: "100%",
              flexWrap: "nowrap",
            },
            samallItemHeader: { flexWrap: "wrap", gap: 5 },
            userInfo: {
              color: A.white,
              fontSize: 24,
              fontFamily: "PoppinsSemi",
              marginBottom: 10,
            },
            shareSaveContainer: { flexDirection: "row", alignItems: "center" },
            itemSubHeader: {
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              gap: 10,
            },
            commentText: {
              color: A.white,
              fontSize: 16,
              fontFamily: "PoppinsMedium",
            },
            itemDescription: {
              color: A.white,
              fontSize: 16,
              fontFamily: "PoppinsMedium",
              marginBottom: 10,
              width: "92%",
              marginRight: 20,
            },
            descriptionWrapper: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
            actionsRow: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              paddingHorizontal: 20,
            },
            commentButton: {
              flex: 1,
              flexDirection: "row",
              marginHorizontal: 20,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              width: 120,
              maxWidth: 120,
              minWidth: 100,
              padding: 5,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            },
            smallDummyPostContainer: { width: "90%" },
            dummyPostContainer: {
              height: 33,
              alignItems: "center",
              width: "60%",
              borderRadius: 8,
              paddingHorizontal: 10,
              marginLeft: 10,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              marginVertical: 20,
              padding: 20,
              flex: 1,
            },
            dummyImage: {
              borderRadius: 25,
              marginVertical: 10,
              resizeMode: "cover",
              width: "100%",
            },
            smallSliderContainer: { width: "90%", backgroundColor: "red" },
            sliderContainer: {
              width: "60%",
              minWidth: 200,
              padding: 20,
              borderRadius: 32,
              paddingBottom: 30,
              marginTop: 20,
            },
            videoWrapper: {
              marginRight: 30,
              backgroundColor: "#fff",
              padding: 5,
              width: 150,
              borderRadius: 10,
              overflow: "hidden",
            },
            video: { width: "100%", height: "100%", borderRadius: 8 },
            iconTiny: { height: 20, width: 20, resizeMode: "contain" },
            iconTinyMargin: {
              height: 20,
              width: 20,
              resizeMode: "contain",
              marginLeft: 10,
            },
            iconSmall: { height: 30, width: 30 },
            iconLarge: { height: 36, width: 36, marginRight: 10 },
            headerIcons: { flexDirection: "row", alignItems: "center" },
            likeContainer: {
              flexDirection: "row",
              gap: 8,
              flex: 1,
              justifyContent: "flex-end",
            },
            commentContainer: {
              flex: 1,
              marginTop: 10,
              gap: 10,
              borderRadius: 20,
              padding: 15,
            },
            commentInput: { flexWrap: "wrap", flexDirection: "row", gap: 10 },
            commentInputText: { flex: 3, minWidth: 200 },
            commentSubmitBtn: {
              flex: 1,
              width: 80,
              minWidth: 80,
              height: 45,
              padding: 10,
              borderRadius: 8,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
            },
            commentBorderDivider: {
              borderBottomWidth: 0.5,
              borderRadius: 10,
              borderColor: "#5c5a5a",
              marginHorizontal: 20,
            },
            commentTitle: { color: A.white },
            flatListContent: { paddingBottom: 10 },
            commentBox: { paddingLeft: 20, gap: 5 },
            commentUser: { color: A.white, fontWeight: "700", fontSize: 18 },
            commentBoxText: { paddingLeft: 20, color: A.white, fontSize: 16 },
            alignCommentIcons: {
              flexDirection: "row",
              gap: 20,
              paddingLeft: 20,
            },
            reelContainer: {
              marginRight: 15,
              backgroundColor: "#f8f8f8",
              borderRadius: 16,
              overflow: "hidden",
              height: 500,
              padding: 10,
              borderWidth: 1,
              borderColor: "#2D8D9F",
            },
            videoPlaceholder: {
              height: "100%",
              backgroundColor: "#e0e0e0",
              aspectRatio: 16 / 9,
              borderRadius: 8,
              overflow: "hidden",
            },
            progressText: {
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderRadius: 4,
              fontSize: 12,
            },
            reelInfo: { padding: 12 },
            title: { fontSize: 14, fontWeight: "600", marginBottom: 4 },
            subtitle: { fontSize: 12, color: "#666", marginBottom: 4 },
            source: { fontSize: 12, color: "#999", marginBottom: 8 },
            statsContainer: {
              flexDirection: "row",
              justifyContent: "space-between",
            },
            stats: { fontSize: 12, color: "#666" },
            likes: { fontSize: 12, color: "#666" },
            webList: { paddingBottom: 10 },
            mobileList: { flexDirection: "row" },
            gradientOverlay: {
              position: "absolute",
              height: "100%",
              width: "100%",
              bottom: 0,
            },
            reactionsContainer: {
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 4,
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: 18,
              marginTop: 8,
              position: "absolute",
              bottom: 5,
            },
            reactionIcon: {
              width: 18,
              height: 18,
              marginRight: -4,
              borderRadius: 9,
              borderWidth: 1,
              borderColor: A.white,
            },
            reactionCount: { marginLeft: 6, fontSize: 12, color: A.white },
            fullscreenContainer: {
              flex: 1,
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            },
            fullscreenImage: {
              width: "40%",
              height: "80%",
              alignSelf: "center",
              resizeMode: "cover",
            },
            closeButton: {
              position: "absolute",
              top: 40,
              right: 20,
              zIndex: 1,
            },
          }),
          ae = () => {
            const e = (0, p.useNavigation)();
            return (0, S.jsxs)(l.default, {
              style: ie.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: ie.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: ie.scrollableContentContainer,
                  children: [
                    (0, S.jsx)(T, {}),
                    (0, S.jsx)(B, {}),
                    (0, S.jsxs)(i.default, {
                      style: ie.bodyContentContainer,
                      children: [
                        (0, S.jsxs)(h.default, {
                          onPress: () => e.navigate("Communities"),
                          style: ie.card,
                          children: [
                            (0, S.jsx)(f.default, {
                              source: w.Exchange1,
                              style: ie.image,
                            }),
                            (0, S.jsx)(c.default, {
                              style: ie.text,
                              children: "Community",
                            }),
                          ],
                        }),
                        (0, S.jsxs)(h.default, {
                          onPress: () => e.navigate("OneToOne"),
                          style: ie.card,
                          children: [
                            (0, S.jsx)(f.default, {
                              source: w.Exchange,
                              style: ie.image,
                            }),
                            (0, S.jsx)(c.default, {
                              style: ie.text,
                              children: "One to one",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          ie = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            bodyContentContainer: {
              flex: 1,
              marginTop: 20,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 20,
            },
            card: {
              padding: 10,
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
            image: { height: 150, width: 150, borderRadius: 10 },
            text: {
              color: "#fff",
              textAlign: "center",
              marginTop: 10,
              fontFamily: "PoppinsSemi",
            },
          });
        a.default.create({
          backGroundImg: { flex: 1, paddingHorizontal: 20 },
          scrollableContent: { flex: 1, paddingVertical: 20 },
          scrollableContentContainer: { alignItems: "center" },
        });
        var re = n(6986),
          le = n(3570),
          se = n(1815),
          de = n(530),
          ce = n(5418);
        const ue = (e) => {
            switch (e) {
              case 1:
              default:
                return "100%";
              case 2:
                return "48%";
              case 3:
                return "31%";
              case 4:
                return "23%";
            }
          },
          fe = a.default.create({
            container: { alignItems: "center" },
            labelView: {
              width: "100%",
              maxWidth: 436,
              minWidth: 250,
              paddingBottom: 10,
              paddingHorizontal: 15,
            },
            labelText: { color: A.white, fontSize: 16 },
            inputWrapper: {
              position: "relative",
              width: "100%",
              maxWidth: 436,
              minWidth: 250,
            },
            input: Object.assign(
              {
                width: "100%",
                maxWidth: 436,
                minWidth: 250,
                borderRadius: 46,
                height: 45,
                paddingHorizontal: 40,
                fontFamily: y.PoppinsMedium,
                textAlign: "center",
                backgroundColor: A.white,
              },
              { boxShadow: "0px 2px 4px rgba(0,0,0,0.25)" }
            ),
            inputWeb: {},
            passwordToggle: {
              position: "absolute",
              zIndex: 10,
              right: "4%",
              top: 10,
            },
            errContainer: {
              width: "100%",
              maxWidth: 436,
              minWidth: 250,
              height: 15,
            },
            errText: { color: "red", fontSize: 12 },
          }),
          he = ({
            placeholder: e,
            placeholderTextColor: t = A.lightBlack,
            autoCapitalize: n = "none",
            keyboardType: o = "ascii-capable",
            value: a,
            onChangeText: r,
            errorMessage: l,
            maxLength: u,
            numOfColumn: f = 1,
            isPassword: h = !1,
            label: m,
            inputStyle: p,
          }) => {
            const [x, y] = (0, d.useState)(h),
              w = (0, s.default)(),
              b = w.width > 1240,
              C = w.width < 800,
              j = (w.width, b ? ue(f) : C ? "100%" : ue(f > 2 ? f - 1 : f));
            return (0, S.jsxs)(i.default, {
              style: [fe.container, { width: j }],
              children: [
                !!m &&
                  (0, S.jsx)(i.default, {
                    style: fe.labelView,
                    children: (0, S.jsx)(c.default, {
                      style: fe.labelText,
                      children: m,
                    }),
                  }),
                (0, S.jsxs)(i.default, {
                  style: fe.inputWrapper,
                  children: [
                    (0, S.jsx)(Y.default, {
                      autoCapitalize: n,
                      keyboardType: o,
                      placeholder: e,
                      placeholderTextColor: t,
                      value: a,
                      onChangeText: r,
                      maxLength: u,
                      style: [fe.input, p, fe.inputWeb],
                      secureTextEntry: x,
                    }),
                    h &&
                      (0, S.jsx)(g.default, {
                        onPress: () => y(!x),
                        style: fe.passwordToggle,
                        children: (0, S.jsx)(ce.default, {
                          name: x ? "eye" : "eye-with-line",
                          size: 24,
                          color: A.black,
                        }),
                      }),
                  ],
                }),
                (0, S.jsx)(i.default, {
                  style: fe.errContainer,
                  children:
                    !!l &&
                    (0, S.jsx)(c.default, { style: fe.errText, children: l }),
                }),
              ],
            });
          },
          { width: ge } = u.default.get("screen"),
          me = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
          pe = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            container: { flex: 1, alignItems: "center" },
            welcomeText: {
              fontWeight: "700",
              fontSize: 30,
              letterSpacing: 0.84,
              color: A.primeryWhite,
              marginTop: 20,
              fontFamily: y.Playfair,
            },
            instructionsText: {
              fontFamily: y.PoppinsMedium,
              fontSize: 14,
              color: A.primeryWhite,
              marginBottom: 45,
            },
            contentContainer: { gap: 10, width: "100%", alignItems: "center" },
            forgotPassword: { width: 426, minWidth: 250 },
            forgotPasswordText: {
              textDecorationLine: "underline",
              fontFamily: y.PoppinsLight,
              fontWeight: "500",
              fontSize: 14,
              color: A.white,
              textAlign: "right",
            },
            signInButton: {
              width: "100%",
              maxWidth: 436,
              minWidth: 250,
              borderRadius: 46,
              height: 45,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1.2 },
              shadowOpacity: 0.17,
              shadowRadius: 1,
              elevation: 5,
            },
            signInButtonText: {
              fontFamily: y.Playfair,
              fontSize: 14,
              fontWeight: "500",
              color: A.black,
            },
            orContainer: {
              flexDirection: "row",
              width: 345,
              justifyContent: "space-between",
              height: 30,
              alignItems: "center",
              paddingVertical: 40,
            },
            divider: {
              height: 1,
              width: 79,
              backgroundColor: A.primarybordercolor,
            },
            orText: {
              fontFamily: y.PoppinsLight,
              fontSize: 14,
              fontWeight: "300",
              color: A.primarygraycolor,
            },
            versionText: {
              color: A.primarygraycolor,
              fontFamily: y.PoppinsRegular,
              fontSize: 13,
              marginTop: 40,
            },
          }),
          xe = ({ navigation: e }) => {
            const [t, n] = (0, d.useState)(!1),
              [o, s] = (0, d.useState)(!1),
              [u, f] = (0, d.useState)("test@yopmail.com"),
              [m, p] = (0, d.useState)(""),
              [x, y] = (0, d.useState)("Password@1234"),
              [A, w] = (0, d.useState)(""),
              [b, I] = (0, d.useState)(!0);
            return (0, S.jsxs)(l.default, {
              style: pe.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: pe.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  children: [
                    (0, S.jsx)(T, {}),
                    (0, S.jsxs)(i.default, {
                      style: pe.container,
                      children: [
                        (0, S.jsx)(se.default, {
                          animated: !0,
                          barStyle: "light-content",
                          backgroundColor: "transparent",
                          translucent: !0,
                        }),
                        (0, S.jsx)(c.default, {
                          style: pe.welcomeText,
                          children: "SignIn",
                        }),
                        (0, S.jsx)(c.default, {
                          style: pe.instructionsText,
                          children: "Welcome back to your account",
                        }),
                        (0, S.jsxs)(i.default, {
                          style: pe.contentContainer,
                          children: [
                            (0, S.jsx)(he, {
                              value: u,
                              onChangeText: (e) =>
                                ((e) => {
                                  f(e), p(""), w("");
                                })(e),
                              placeholder: "Email address",
                              errorMessage: m,
                            }),
                            (0, S.jsx)(he, {
                              value: x,
                              onChangeText: (e) => (y(e), void w("")),
                              placeholder: "Password",
                              errorMessage: A,
                              isPassword: !0,
                            }),
                            (0, S.jsx)(h.default, {
                              onPress: () =>
                                b
                                  ? (async () => {
                                      s(!0);
                                      try {
                                        const t = { contact: u },
                                          n = C.FORGOT_PASSWORD_OTP,
                                          o = await v(n, t),
                                          a = o.data.data.reset_token;
                                        await j.default.setItem(
                                          "verify_access_token",
                                          a
                                        ),
                                          await j.default.setItem(
                                            "mainProfile",
                                            o.data.data.user_id
                                          ),
                                          o.data &&
                                            e.navigate("Otp", {
                                              forgotPassword: !0,
                                            });
                                      } catch (t) {
                                        console.log(
                                          "error forgot otp api ---",
                                          t
                                        ),
                                          "Account not found with provided email or phone." ==
                                            t.response.data.message &&
                                          404 == t.response.data.status
                                            ? p("Email not found")
                                            : "Email or phone number is required." ==
                                                t.response.data.message &&
                                              400 == t.response.data.status &&
                                              p("Email is Requied");
                                      } finally {
                                        s(!1);
                                      }
                                    })()
                                  : (async () => {
                                      s(!0);
                                      try {
                                        const t = { contact: u },
                                          n = C.RESEND_OTP,
                                          o = await v(n, t),
                                          a = o.data.data.access_token;
                                        await j.default.setItem(
                                          "verify_access_token",
                                          a
                                        ),
                                          o.data && e.navigate("Otp");
                                      } catch (t) {
                                        console.log(
                                          "error verify otp api ---",
                                          t
                                        ),
                                          "Account not found with provided email or phone." ==
                                            t.response.data.message &&
                                          404 == t.response.data.status
                                            ? p("Email not found")
                                            : "Email or phone number is required." ==
                                                t.response.data.message &&
                                              400 == t.response.data.status &&
                                              p("Email is Requied");
                                      } finally {
                                        s(!1);
                                      }
                                    })(),
                              style: pe.forgotPassword,
                              disabled: o,
                              children: o
                                ? (0, S.jsx)(de.default, { color: "white" })
                                : (0, S.jsx)(c.default, {
                                    style: [pe.forgotPasswordText],
                                    children: b
                                      ? "Forgot your password ?"
                                      : "Verify Account ?",
                                  }),
                            }),
                            (0, S.jsx)(h.default, {
                              onPress: async () => {
                                n(!0);
                                const t = { email: u, password: x },
                                  o = C.LOGIN;
                                try {
                                  if ("" == u)
                                    return void p("Enter Your Email");
                                  if (!me.test(u))
                                    return void p("Invalid email");
                                  if ("" == x)
                                    return void w("Enter Your Password");
                                  const n = await v(o, t);
                                  console.log("Api Token Login", n.data);
                                  const a = n.data.data.access_token;
                                  await j.default.setItem("access_token", a),
                                    await j.default.setItem(
                                      "mainProfile",
                                      n.data.data.user_id
                                    ),
                                    n.data &&
                                      (console.log(
                                        "User registered successfully"
                                      ),
                                      e.navigate("MainStack"));
                                } catch (a) {
                                  console.log("error login ---", a),
                                    "You are not verified, Please verify your account first." ==
                                      a.response.data.message &&
                                      (console.log("it is not verfied account"),
                                      I(!1)),
                                    a.response.data &&
                                      w(a.response.data?.message),
                                    console.error(
                                      "Registration Error:",
                                      a.response ? a.response.data : a.message
                                    );
                                } finally {
                                  n(!1);
                                }
                              },
                              activeOpacity: 0.8,
                              style: pe.signInButton,
                              disabled: t,
                              children: t
                                ? (0, S.jsx)(de.default, { color: "black" })
                                : (0, S.jsx)(c.default, {
                                    style: pe.signInButtonText,
                                    children: "SignIn",
                                  }),
                            }),
                          ],
                        }),
                        (0, S.jsxs)(i.default, {
                          style: pe.orContainer,
                          children: [
                            (0, S.jsx)(i.default, { style: pe.divider }),
                            (0, S.jsx)(c.default, {
                              numberOfLines: 1,
                              style: [pe.orText],
                              children: "Don't have an account",
                            }),
                            (0, S.jsx)(i.default, { style: pe.divider }),
                          ],
                        }),
                        (0, S.jsx)(g.default, {
                          onPress: () => e.navigate("Register"),
                          style: pe.signInButton,
                          children: (0, S.jsx)(c.default, {
                            style: pe.signInButtonText,
                            children: "Register New Acoount",
                          }),
                        }),
                        (0, S.jsx)(c.default, {
                          style: pe.versionText,
                          children: "Version: 1.0",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        var ye = n(1171);
        const Ae = ({ id: e }) => {
            const [t, o] = (0, d.useState)(null),
              [a, r] = (0, d.useState)(),
              [l, u] = (0, d.useState)(),
              [p, y] = (0, d.useState)(null),
              [I, T] = (0, d.useState)([]),
              [E, k] = (0, d.useState)(!1),
              [B, O] = (0, d.useState)(null),
              [v, P] = (0, d.useState)([]),
              { width: M } = (0, s.default)(),
              U = M < 800,
              N = M < 426,
              [z, F] = (0, d.useState)([]),
              V = async () => {
                if (navigator.share)
                  try {
                    await navigator.share({
                      title: "My App",
                      text: "Check out this awesome app: https://example.com",
                      url: "https://example.com",
                    });
                  } catch (e) {
                    m.default.alert("Error", e.message);
                  }
                else
                  m.default.alert(
                    "Share not supported",
                    "Your browser does not support Web Share API."
                  );
              },
              H = async (e, n) => {
                try {
                  const o = await R.default.post(
                      `${C.REACTION_CONTENT + e}/`,
                      { action: n },
                      { headers: { Authorization: `Bearer ${t}` } }
                    ),
                    i = o.data.data;
                  if (200 === o.status) {
                    const e = a.map((e) =>
                      e.id === i.post_id
                        ? Object.assign({}, e, {
                            disliked: i.disliked,
                            liked: i.liked,
                          })
                        : e
                    );
                    r(e);
                  }
                } catch (o) {
                  console.error("res error ===---\x3e>>", o);
                }
              },
              Y = (e) => {
                l == e
                  ? (T(null), u(null))
                  : (T(null),
                    (async (e) => {
                      const n = {
                        method: "get",
                        url: `${C.GET_CONTENT_COMMENT}${e}`,
                        headers: { Authorization: `Bearer ${t}` },
                      };
                      try {
                        const e = await R.default.request(n);
                        T(e.data.data);
                      } catch (o) {
                        console.error("error get comment :>> ", o);
                      }
                    })(e),
                    u(e),
                    y(null));
              };
            return (
              (0, d.useEffect)(() => {
                (async () => {
                  const t = [],
                    n = [];
                  a?.forEach((e) => {
                    const o =
                        e.media?.filter((e) => "video" === e.media_type) || [],
                      a =
                        e.media?.filter((e) => "video" !== e.media_type) || [];
                    o.length > 0 && t.push(Object.assign({}, e, { media: o })),
                      a.length > 0 &&
                        n.push(Object.assign({}, e, { media: a }));
                  }),
                    console.log(
                      "\ud83d\ude80 ~ getPostData?.forEach ~ postsWithVideoMedia:",
                      t
                    ),
                    n.sort(
                      (e, t) => new Date(t.updated_at) - new Date(e.updated_at)
                    );
                  const o = n.filter((e) => !0 === e.is_free),
                    i = await j.default.getItem("mainProfile");
                  console.log(
                    "\ud83d\ude80 ~ GetProfile ~ Data:",
                    i,
                    "Data",
                    e,
                    "id"
                  ),
                    P(i == e ? n : o),
                    F(t);
                })();
              }, [a]),
              (0, d.useEffect)(() => {
                (async () => {
                  const e = await j.default.getItem("access_token");
                  e
                    ? o(e)
                    : console.error(
                        "Access token not found. Please log in again."
                      );
                })();
              }, []),
              (0, d.useEffect)(() => {
                t &&
                  (async () => {
                    if (t)
                      try {
                        const n = await R.default.get(
                          C.OTHER_CONTENT_LIST + e + "/",
                          { headers: { Authorization: `Bearer ${t}` } }
                        );
                        r(n.data.data),
                          console.log("response.data.data==>>", n.data.data);
                      } catch (n) {
                        console.error("Error get post data:", n);
                      }
                  })();
              }, [t]),
              (0, S.jsx)(ye.SafeAreaView, {
                style: we.container,
                children: (0, S.jsxs)(i.default, {
                  style: we.innerContainer,
                  children: [
                    (0, S.jsx)(W.default, {
                      data: v,
                      keyExtractor: (e) => e.id.toString(),
                      style: [we.scrollContainer, U && we.scrollContainerSmall],
                      contentContainerStyle: we.contentContainer,
                      scrollEnabled: !0,
                      nestedScrollEnabled: !0,
                      renderItem: ({ item: e }) =>
                        (0, S.jsxs)(
                          i.default,
                          {
                            style: we.dataItem,
                            children: [
                              (0, S.jsxs)(i.default, {
                                style: [
                                  we.itemHeader,
                                  U && we.samallItemHeader,
                                ],
                                children: [
                                  (0, S.jsxs)(c.default, {
                                    style: we.userInfo,
                                    children: [" ", e?.creator_name],
                                  }),
                                  (0, S.jsxs)(i.default, {
                                    style: we.shareSaveContainer,
                                    children: [
                                      (0, S.jsx)(g.default, {
                                        onPress: V,
                                        children: (0, S.jsx)(f.default, {
                                          source: w.share,
                                          style: we.iconLarge,
                                        }),
                                      }),
                                      (0, S.jsx)(h.default, {
                                        onPress: () =>
                                          (async (e) => {
                                            const n = await Promise.all(
                                              a.map(async (n) => {
                                                if (n.id === e)
                                                  if (n.is_saved)
                                                    try {
                                                      const o =
                                                        await R.default.delete(
                                                          C.REMOVE_CONTENT,
                                                          {
                                                            data: {
                                                              content_id: e,
                                                            },
                                                            headers: {
                                                              Authorization: `Bearer ${t}`,
                                                            },
                                                          }
                                                        );
                                                      if (
                                                        (o.data.data,
                                                        204 === o.status)
                                                      )
                                                        return Object.assign(
                                                          {},
                                                          n,
                                                          { is_saved: !1 }
                                                        );
                                                    } catch (o) {
                                                      console.error(
                                                        "Error removing content for post ID:",
                                                        e,
                                                        o
                                                      );
                                                    }
                                                  else
                                                    try {
                                                      const o =
                                                          await R.default.post(
                                                            `${C.SAVE_CONTENT}`,
                                                            { content_id: e },
                                                            {
                                                              headers: {
                                                                Authorization: `Bearer ${t}`,
                                                              },
                                                            }
                                                          ),
                                                        a = o.data.data;
                                                      if (
                                                        201 === o.status &&
                                                        n.id === a.content.id
                                                      )
                                                        return Object.assign(
                                                          {},
                                                          n,
                                                          { is_saved: !0 }
                                                        );
                                                    } catch (o) {
                                                      console.error(
                                                        "Error saving content for post ID:",
                                                        e,
                                                        o
                                                      );
                                                    }
                                                return n;
                                              })
                                            );
                                            r(n);
                                          })(e.id),
                                        children: (0, S.jsx)(f.default, {
                                          source: w.star,
                                          style: {
                                            width: 20,
                                            height: 20,
                                            marginHorizontal: 3,
                                            tintColor: e.is_saved
                                              ? void 0
                                              : "White",
                                          },
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, S.jsxs)(i.default, {
                                style: we.itemSubHeader,
                                children: [
                                  (0, S.jsx)(f.default, {
                                    source: w.comment,
                                    style: we.iconTiny,
                                  }),
                                  (0, S.jsx)(c.default, {
                                    style: we.commentText,
                                    children: "Comment",
                                  }),
                                ],
                              }),
                              (0, S.jsx)(i.default, {
                                style: we.descriptionWrapper,
                                children: (0, S.jsx)(c.default, {
                                  style: we.itemDescription,
                                  numberOfLines: 2,
                                  children: e.description,
                                }),
                              }),
                              (0, S.jsx)(q, {
                                media: e.media,
                                showDotIndicator: !0,
                              }),
                              (0, S.jsxs)(i.default, {
                                style: [
                                  we.actionsRow,
                                  { paddingHorizontal: N ? 0 : 20 },
                                ],
                                children: [
                                  (0, S.jsx)(i.default, {
                                    style: { flex: N ? 0 : 1 },
                                  }),
                                  (0, S.jsxs)(h.default, {
                                    style: we.commentButton,
                                    onPress: () => Y(e.id),
                                    children: [
                                      (0, S.jsx)(f.default, {
                                        source: w.comment,
                                        style: we.iconTiny,
                                      }),
                                      (0, S.jsx)(c.default, {
                                        style: { color: "#fff" },
                                        children: "Comment",
                                      }),
                                    ],
                                  }),
                                  (0, S.jsxs)(i.default, {
                                    style: we.likeContainer,
                                    children: [
                                      (0, S.jsx)(h.default, {
                                        onPress: () => H(e.id, "like"),
                                        children: (0, S.jsx)($.default, {
                                          name: "like1",
                                          color: e.liked ? A.likeBlue : A.white,
                                          size: 20,
                                        }),
                                      }),
                                      (0, S.jsx)(h.default, {
                                        onPress: () => H(e.id, "dislike"),
                                        children: (0, S.jsx)($.default, {
                                          name: "dislike1",
                                          color: e.disliked
                                            ? A.likeBlue
                                            : A.white,
                                          size: 20,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              l == e.id &&
                                (0, S.jsxs)(i.default, {
                                  style: we.commentContainer,
                                  children: [
                                    (0, S.jsxs)(i.default, {
                                      style: we.commentInput,
                                      children: [
                                        (0, S.jsx)(i.default, {
                                          style: we.commentInputText,
                                          children: (0, S.jsx)(ee, {
                                            placeholder: "Comment",
                                            placeholderTextColor: A.lightBlack,
                                            value: p,
                                            onChangeText: (e) => y(e),
                                            keyboardType: "ascii-capable",
                                          }),
                                        }),
                                        (0, S.jsx)(h.default, {
                                          onPress: () =>
                                            E
                                              ? (async () => {
                                                  if (!B) return;
                                                  y(null);
                                                  const e = {
                                                    method: "put",
                                                    url: `${C.EDIT_CONTENT_COMMENT}${B}/`,
                                                    headers: {
                                                      "Content-Type":
                                                        "application/json",
                                                      Accept:
                                                        "application/json",
                                                      Authorization: `Bearer ${t}`,
                                                    },
                                                    data: { text: p },
                                                  };
                                                  try {
                                                    const t =
                                                        await R.default.request(
                                                          e
                                                        ),
                                                      n = I.map((e) =>
                                                        e.id === t.data.data.id
                                                          ? Object.assign(
                                                              {},
                                                              e,
                                                              {
                                                                text: t.data
                                                                  .data.text,
                                                              }
                                                            )
                                                          : e
                                                      );
                                                    T(n), k(!1), O(null), y("");
                                                  } catch (n) {
                                                    console.error(
                                                      "error comment create :>> ",
                                                      n
                                                    );
                                                  }
                                                })()
                                              : (async (e) => {
                                                  if (p) {
                                                    y("");
                                                    const o = {
                                                      method: "post",
                                                      url: C.CREATE_CONTENT_COMMENT,
                                                      headers: {
                                                        "Content-Type":
                                                          "application/json",
                                                        Accept:
                                                          "application/json",
                                                        Authorization: `Bearer ${t}`,
                                                      },
                                                      data: {
                                                        content: e,
                                                        text: p,
                                                      },
                                                    };
                                                    try {
                                                      const e = (
                                                        await R.default.request(
                                                          o
                                                        )
                                                      ).data.data;
                                                      if (I && I.length > 0) {
                                                        const t = I?.filter(
                                                          (t) => t.id !== e.id
                                                        );
                                                        T([e, ...t]);
                                                      } else T([e]);
                                                    } catch (n) {
                                                      console.error(
                                                        "error comment create :>> ",
                                                        n
                                                      );
                                                    }
                                                  } else
                                                    console.log("Empty input");
                                                })(e.id),
                                          style: we.commentSubmitBtn,
                                          children: (0, S.jsx)(c.default, {
                                            children: E ? "Update" : "Submit",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, S.jsx)(i.default, {
                                      style: we.commentBorderDivider,
                                    }),
                                    (0, S.jsxs)(i.default, {
                                      style: { gap: 10 },
                                      children: [
                                        (0, S.jsx)(c.default, {
                                          style: we.commentTitle,
                                          children: "Comments",
                                        }),
                                        I && I.length > 0
                                          ? (0, S.jsx)(W.default, {
                                              data: I,
                                              contentContainerStyle:
                                                we.flatListContent,
                                              scrollEnabled: !1,
                                              nestedScrollEnabled: !0,
                                              keyExtractor: (e) =>
                                                e.id.toString(),
                                              renderItem: (e) =>
                                                (0, S.jsxs)(i.default, {
                                                  style: we.commentBox,
                                                  children: [
                                                    (0, S.jsx)(c.default, {
                                                      style: we.commentUser,
                                                      children: e.item.user,
                                                    }),
                                                    (0, S.jsx)(c.default, {
                                                      style: we.commentBoxText,
                                                      children: e.item.text,
                                                    }),
                                                    (0, S.jsxs)(i.default, {
                                                      style:
                                                        we.alignCommentIcons,
                                                      children: [
                                                        (0, S.jsx)(h.default, {
                                                          onPress: () => {
                                                            (async (e) => {
                                                              const n = {
                                                                method: "post",
                                                                url: C.CONTENT_COMMENT_REACTION,
                                                                headers: {
                                                                  "Content-Type":
                                                                    "application/json",
                                                                  Accept:
                                                                    "application/json",
                                                                  Authorization: `Bearer ${t}`,
                                                                },
                                                                data: {
                                                                  comment_id: e,
                                                                },
                                                              };
                                                              try {
                                                                const t =
                                                                    await R.default.request(
                                                                      n
                                                                    ),
                                                                  o = I.map(
                                                                    (n) =>
                                                                      n.id === e
                                                                        ? Object.assign(
                                                                            {},
                                                                            n,
                                                                            {
                                                                              liked_by:
                                                                                t
                                                                                  .data
                                                                                  .data
                                                                                  .liked,
                                                                            }
                                                                          )
                                                                        : n
                                                                  );
                                                                T(o);
                                                              } catch (o) {
                                                                console.error(
                                                                  "error comment reaction :>> ",
                                                                  o
                                                                );
                                                              }
                                                            })(e.item.id);
                                                          },
                                                          children: (0, S.jsx)(
                                                            $.default,
                                                            {
                                                              name: "like1",
                                                              color: e.item
                                                                .liked_by
                                                                ? A.likeBlue
                                                                : A.white,
                                                              size: 20,
                                                            }
                                                          ),
                                                        }),
                                                        (0, S.jsx)(h.default, {
                                                          onPress: () => {
                                                            (async (e) => {
                                                              k(!0), O(e);
                                                              const t = I.find(
                                                                (t) => t.id == e
                                                              );
                                                              y(t.text);
                                                            })(e.item.id);
                                                          },
                                                          children: (0, S.jsx)(
                                                            $.default,
                                                            {
                                                              name: "edit",
                                                              color: A.white,
                                                              size: 20,
                                                            }
                                                          ),
                                                        }),
                                                        (0, S.jsx)(h.default, {
                                                          onPress: () => {
                                                            (async (e) => {
                                                              const n = {
                                                                method:
                                                                  "delete",
                                                                url: `${C.DELETE_CONTENT_COMMENT}${e}/`,
                                                                headers: {
                                                                  "Content-Type":
                                                                    "application/json",
                                                                  Accept:
                                                                    "application/json",
                                                                  Authorization: `Bearer ${t}`,
                                                                },
                                                              };
                                                              try {
                                                                await R.default.request(
                                                                  n
                                                                );
                                                                const t =
                                                                  I.filter(
                                                                    (t) =>
                                                                      t.id !== e
                                                                  );
                                                                T(t);
                                                              } catch (o) {
                                                                console.error(
                                                                  "error comment reaction :>> ",
                                                                  o
                                                                );
                                                              }
                                                            })(e.item.id);
                                                          },
                                                          children: (0, S.jsx)(
                                                            $.default,
                                                            {
                                                              name: "delete",
                                                              color: A.white,
                                                              size: 20,
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ItemSeparatorComponent: () =>
                                                (0, S.jsx)(i.default, {
                                                  style: [
                                                    we.commentBorderDivider,
                                                    {
                                                      height: 20,
                                                      marginBottom: 10,
                                                    },
                                                  ],
                                                }),
                                            })
                                          : (0, S.jsx)(i.default, {
                                              children: (0, S.jsx)(c.default, {
                                                style: {
                                                  textAlign: "center",
                                                  color: A.white,
                                                },
                                                children: "No comments",
                                              }),
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          },
                          e.id
                        ),
                    }),
                    z.length > 0 &&
                      (0, S.jsxs)(x.default, {
                        intensity: 70,
                        style: [
                          we.sliderContainer,
                          U && we.smallSliderContainer,
                          { marginBottom: 10 },
                        ],
                        children: [
                          (0, S.jsx)(i.default, {
                            style: we.itemHeader,
                            children: (0, S.jsx)(c.default, {
                              style: we.userInfo,
                              children: "Uploaded Videos",
                            }),
                          }),
                          (0, S.jsx)(W.default, {
                            data: z,
                            keyExtractor: (e) => e.id.toString(),
                            scrollEnabled: !0,
                            nestedScrollEnabled: !0,
                            horizontal: !0,
                            renderItem: ({ item: e }) =>
                              e.media.map((t, o) =>
                                (0, S.jsx)(i.default, {
                                  style: [we.reelContainer, { width: 300 }],
                                  children: (0, S.jsxs)(i.default, {
                                    style: we.videoPlaceholder,
                                    children: [
                                      (0, S.jsx)(_.default, {
                                        source: { uri: `${b}${t.files}` },
                                        style: we.video,
                                        resizeMode: L.ResizeMode.COVER,
                                        shouldPlay: !0,
                                        isMuted: !0,
                                      }),
                                      (0, S.jsx)(D.LinearGradient, {
                                        colors: [
                                          "rgba(0,0,0,0.0)",
                                          "rgba(0,0,0,0.0)",
                                          "rgba(0,0,0,0.0)",
                                          "rgba(0,0,0,0.8)",
                                          "rgba(0,0,0,0.8)",
                                        ],
                                        style: we.gradientOverlay,
                                        start: { x: 0, y: 0 },
                                        end: { x: 0, y: 2 },
                                      }),
                                      (0, S.jsxs)(i.default, {
                                        style: we.reactionsContainer,
                                        children: [
                                          (0, S.jsxs)(i.default, {
                                            style: [
                                              we.reactionsContainer,
                                              { bottom: 25 },
                                            ],
                                            children: [
                                              (0, S.jsx)(f.default, {
                                                source: {
                                                  uri: t?.profile_image,
                                                },
                                                style: {
                                                  height: 25,
                                                  width: 25,
                                                  borderRadius: 4,
                                                },
                                              }),
                                              (0, S.jsx)(c.default, {
                                                numberOfLines: 1,
                                                style: {
                                                  marginLeft: 10,
                                                  color: A.white,
                                                  fontSize: 19,
                                                },
                                                children: e?.title,
                                              }),
                                            ],
                                          }),
                                          (0, S.jsx)(i.default, {
                                            style: we.reactionsContainer,
                                          }),
                                          (0, S.jsx)(f.default, {
                                            source: n(7003),
                                            style: we.reactionIcon,
                                          }),
                                          (0, S.jsx)(f.default, {
                                            source: n(8559),
                                            style: we.reactionIcon,
                                          }),
                                          (0, S.jsx)(f.default, {
                                            source: n(2942),
                                            style: we.reactionIcon,
                                          }),
                                          (0, S.jsx)(c.default, {
                                            style: we.reactionCount,
                                            children: "1.7K",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                })
                              ),
                          }),
                        ],
                      }),
                  ],
                }),
              })
            );
          },
          we = a.default.create({
            container: { flex: 1, flexGrow: 1 },
            innerContainer: {
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            },
            scrollContainerSmall: { width: "90%" },
            scrollContainer: { width: "60%", flexGrow: 0 },
            contentContainer: { width: "100%" },
            dataItem: {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: 10,
              marginVertical: 5,
              borderRadius: 25,
            },
            itemHeader: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 5,
              width: "100%",
              flexWrap: "nowrap",
            },
            samallItemHeader: { flexWrap: "wrap", gap: 5 },
            userInfo: {
              color: A.white,
              fontSize: 24,
              fontFamily: "PoppinsSemi",
            },
            shareSaveContainer: { flexDirection: "row", alignItems: "center" },
            itemSubHeader: {
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              gap: 10,
            },
            commentText: {
              color: A.white,
              fontSize: 16,
              fontFamily: "PoppinsMedium",
            },
            itemDescription: {
              color: A.white,
              fontSize: 16,
              fontFamily: "PoppinsMedium",
              marginBottom: 10,
              width: "92%",
              marginRight: 20,
            },
            descriptionWrapper: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
            actionsRow: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            },
            commentButton: {
              flex: 1,
              flexDirection: "row",
              marginHorizontal: 20,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              width: 120,
              maxWidth: 120,
              minWidth: 100,
              padding: 5,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            },
            iconTiny: { height: 20, width: 20, resizeMode: "contain" },
            iconLarge: { height: 36, width: 36, marginRight: 10 },
            likeContainer: {
              flexDirection: "row",
              gap: 8,
              flex: 1,
              justifyContent: "flex-end",
            },
            commentContainer: {
              flex: 1,
              marginTop: 10,
              gap: 10,
              borderRadius: 20,
              padding: 15,
            },
            commentInput: { flexWrap: "wrap", flexDirection: "row", gap: 10 },
            commentInputText: { flex: 3, minWidth: 200 },
            commentSubmitBtn: {
              flex: 1,
              width: 80,
              minWidth: 80,
              height: 45,
              padding: 10,
              borderRadius: 8,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
            },
            commentBorderDivider: {
              borderBottomWidth: 0.5,
              borderRadius: 10,
              borderColor: "#5c5a5a",
              marginHorizontal: 20,
            },
            commentTitle: { color: A.white },
            flatListContent: { paddingBottom: 10 },
            commentBox: { paddingLeft: 20, gap: 5 },
            commentUser: { color: A.white, fontWeight: "700", fontSize: 18 },
            commentBoxText: { paddingLeft: 20, color: A.white, fontSize: 16 },
            alignCommentIcons: {
              flexDirection: "row",
              gap: 20,
              paddingLeft: 20,
            },
            mobileList: { flexDirection: "row" },
            reelContainer: {
              marginRight: 15,
              backgroundColor: "#f8f8f8",
              borderRadius: 16,
              overflow: "hidden",
              height: 500,
              padding: 10,
              borderWidth: 1,
              borderColor: "#2D8D9F",
            },
            videoPlaceholder: {
              height: "100%",
              backgroundColor: "#e0e0e0",
              aspectRatio: 16 / 9,
              borderRadius: 8,
              overflow: "hidden",
            },
            progressText: {
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderRadius: 4,
              fontSize: 12,
            },
            reelInfo: { padding: 12 },
            title: { fontSize: 14, fontWeight: "600", marginBottom: 4 },
            subtitle: { fontSize: 12, color: "#666", marginBottom: 4 },
            source: { fontSize: 12, color: "#999", marginBottom: 8 },
            statsContainer: {
              flexDirection: "row",
              justifyContent: "space-between",
            },
            stats: { fontSize: 12, color: "#666" },
            likes: { fontSize: 12, color: "#666" },
            smallSliderContainer: { width: "90%", backgroundColor: "red" },
            sliderContainer: {
              width: "60%",
              minWidth: 200,
              padding: 20,
              borderRadius: 32,
              paddingBottom: 30,
              marginTop: 20,
            },
            reactionsContainer: {
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 4,
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: 18,
              marginTop: 8,
              position: "absolute",
              bottom: 5,
            },
            reactionIcon: {
              width: 18,
              height: 18,
              marginRight: -4,
              borderRadius: 9,
              borderWidth: 1,
              borderColor: A.white,
            },
            reactionCount: { marginLeft: 6, fontSize: 12, color: A.white },
            video: { width: "100%", height: "100%", borderRadius: 8 },
          });
        var be = n(6774);
        const Ce = () => {
            const e = Array(9).fill({ image: w.Grid }),
              [t, n] = (0, d.useState)(u.default.get("window").width);
            return (0, S.jsxs)(i.default, {
              style: je.container,
              children: [
                (0, S.jsx)(V, {}),
                (0, S.jsxs)(x.default, {
                  intensity: 70,
                  style: je.itemHeader,
                  children: [
                    (0, S.jsx)(G, {}),
                    (0, S.jsx)(c.default, {
                      style: je.headerText,
                      children: "Proposed Membership by the User",
                    }),
                    (0, S.jsx)(be.FlatGrid, {
                      itemDimension: 320,
                      data: e,
                      spacing: 65,
                      style: je.gridView,
                      renderItem: ({ item: e }) =>
                        (0, S.jsxs)(i.default, {
                          style: je.card,
                          children: [
                            (0, S.jsx)(f.default, {
                              source: e.image,
                              style: je.itemImage,
                            }),
                            (0, S.jsxs)(D.LinearGradient, {
                              colors: ["#297392", "#1c276c"],
                              start: { x: 0, y: 0 },
                              end: { x: 1, y: 0 },
                              style: je.actions,
                              children: [
                                (0, S.jsx)(h.default, {
                                  style: je.actionButton,
                                  children: (0, S.jsx)(f.default, {
                                    source: w.like,
                                    style: je.actionIcon,
                                  }),
                                }),
                                (0, S.jsx)(h.default, {
                                  style: [je.actionButton, {}],
                                  children: (0, S.jsx)(f.default, {
                                    source: w.Dislike,
                                    style: [
                                      je.actionIcon,
                                      { tintColor: A.white },
                                    ],
                                  }),
                                }),
                                (0, S.jsxs)(h.default, {
                                  style: je.commentButton,
                                  children: [
                                    (0, S.jsx)(f.default, {
                                      source: w.comment,
                                      style: je.actionIcon,
                                    }),
                                    (0, S.jsx)(c.default, {
                                      style: je.commentText,
                                      children: "Comment",
                                    }),
                                  ],
                                }),
                                (0, S.jsxs)(h.default, {
                                  style: je.commentButton,
                                  children: [
                                    (0, S.jsx)(f.default, {
                                      source: w.tip,
                                      style: je.actionIcon,
                                    }),
                                    (0, S.jsx)(c.default, {
                                      style: je.commentText,
                                      children: "Give Tip",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, S.jsx)(i.default, {
                              style: {
                                position: "absolute",
                                left: 15,
                                top: 15,
                              },
                              children: (0, S.jsx)(f.default, {
                                source: w.share,
                                style: {
                                  tintColor: "#FFFFFF",
                                  height: 24,
                                  width: 24,
                                },
                              }),
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              ],
            });
          },
          je = a.default.create({
            container: {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            },
            itemHeader: {
              marginBottom: 20,
              backgroundColor: "red",
              borderRadius: 25,
              width: "100%",
              minWidth: 150,
            },
            headerText: {
              textAlign: "center",
              color: "#fff",
              fontSize: 22,
              marginVertical: 10,
            },
            gridView: {},
            card: {
              backgroundColor: "#fff",
              borderRadius: 15,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5,
              borderWidth: 1,
              borderColor: "#fff",
              minWidth: 150,
              maxWidth: 380,
            },
            itemImage: {
              width: "100%",
              height: 200,
              resizeMode: "cover",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            },
            actions: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: "red",
            },
            actionIcon: { width: 20, height: 20, tintColor: A.white },
            commentButton: {
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 8,
            },
            commentText: { marginLeft: 5, fontSize: 12, color: A.white },
          }),
          { width: Se, height: Ie } = u.default.get("window"),
          Te = ({ route: e }) => {
            const { id: t } = e.params || {};
            console.log("\ud83d\ude80 ~ User ~ id:", t);
            (0, p.useNavigation)();
            const [n, s] = (0, d.useState)("User Wall"),
              [f, g] = (0, d.useState)(0),
              [m, x] = (0, d.useState)(u.default.get("window").width);
            (0, d.useEffect)(() => {
              u.default.addEventListener("change", () => {
                x(u.default.get("window").width);
              });
            }, []);
            return (0, S.jsx)(o.default, {
              style: { flex: 1 },
              children: (0, S.jsxs)(l.default, {
                style: { flex: 1, flexGrow: 1 },
                children: [
                  (0, S.jsx)(D.LinearGradient, {
                    colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 1 },
                    style: a.default.absoluteFill,
                  }),
                  (0, S.jsx)(r.default, {
                    showsVerticalScrollIndicator: !1,
                    style: { flex: 1 },
                    contentContainerStyle: {},
                    children: (0, S.jsxs)(i.default, {
                      style: { padding: 20 },
                      children: [
                        (0, S.jsx)(T, { backNavigation: !0 }),
                        (0, S.jsxs)(i.default, {
                          style: {
                            backgroundColor: "white",
                            height: 55,
                            width: "80%",
                            borderBottomEndRadius: 40,
                            borderBottomStartRadius: 40,
                            minWidth: 230,
                            flexDirection: "row",
                            justifyContent: "space-around",
                            padding: 2,
                            alignSelf: "center",
                          },
                          children: [
                            (0, S.jsx)(h.default, {
                              style: {
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                paddingVertical: 10,
                                backgroundColor:
                                  "User Wall" === n ? "#2D2B9B" : "transparent",
                                borderBottomEndRadius: 40,
                                borderBottomStartRadius: 40,
                              },
                              onPress: () => s("User Wall"),
                              children: (0, S.jsx)(c.default, {
                                style: {
                                  fontSize: 16,
                                  fontWeight: "bold",
                                  color: "User Wall" === n ? "white" : "#000",
                                },
                                children: "User Wall",
                              }),
                            }),
                            (0, S.jsx)(h.default, {
                              style: {
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                paddingVertical: 10,
                                backgroundColor:
                                  "Content" === n ? "#2D2B9B" : "transparent",
                                borderBottomEndRadius: 40,
                                borderBottomStartRadius: 40,
                              },
                              onPress: () => s("Content"),
                              children: (0, S.jsx)(c.default, {
                                style: {
                                  fontSize: 16,
                                  fontWeight: "bold",
                                  color: "Content" === n ? "white" : "#000",
                                },
                                children: "Content",
                              }),
                            }),
                          ],
                        }),
                        "User Wall" === n &&
                          (0, S.jsx)(i.default, {
                            style: {
                              flex: 1,
                              width: "100%",
                              paddingVertical: 20,
                            },
                            children: (0, S.jsx)(Ae, { id: t }),
                          }),
                        "Content" === n &&
                          (0, S.jsx)(i.default, {
                            style: {
                              flex: 1,
                              width: "100%",
                              paddingVertical: 20,
                            },
                            children: (0, S.jsx)(Ce, {}),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          },
          { width: Ee } =
            (a.default.create({
              blurViewContainer: {
                flex: 1,
                borderRadius: 32,
                alignItems: "center",
                marginTop: 20,
                borderWidth: 2,
              },
              innerContainer: {
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              },
              dataItem: {
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                padding: 10,
                marginVertical: 5,
                width: "60%",
                borderRadius: 25,
              },
              itemHeader: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 5,
              },
              userInfo: {
                color: A.white,
                fontSize: 24,
                fontFamily: "PoppinsSemi",
              },
              itemSubHeader: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              },
              commentText: {
                color: A.white,
                fontSize: 16,
                fontFamily: "PoppinsMedium",
              },
              itemDescription: {
                color: A.white,
                fontSize: 16,
                fontFamily: "PoppinsMedium",
                marginBottom: 10,
              },
              sliderContainer: {
                width: "60%",
                minWidth: 400,
                padding: 20,
                borderRadius: 32,
                paddingBottom: 30,
              },
              scrollContainer: { width: "100%" },
              imageContainer: {
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              },
              imageWrapper: {
                width: Se,
                justifyContent: "center",
                alignItems: "center",
              },
              image: {
                width: "80%",
                height: 200,
                resizeMode: "contain",
                borderRadius: 8,
              },
              paginationContainer: {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              },
              dot: {
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "gray",
                marginHorizontal: 5,
              },
              activeDot: { backgroundColor: "blue" },
            }),
            u.default.get("screen")),
          ke = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
          Be =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
          Re = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            container: { flex: 1, padding: 20, alignItems: "center" },
            welcomeText: {
              fontWeight: "700",
              fontSize: 30,
              letterSpacing: 0.84,
              color: A.primeryWhite,
              marginTop: 20,
              fontFamily: y.Playfair,
            },
            instructionsText: {
              fontFamily: y.PoppinsMedium,
              fontSize: 14,
              color: A.primeryWhite,
              marginBottom: 45,
            },
            contentContainer: { gap: 10, width: "100%", alignItems: "center" },
            signInButton: {
              width: "100%",
              maxWidth: 436,
              minWidth: 280,
              borderRadius: 46,
              height: 45,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1.2 },
              shadowOpacity: 0.17,
              shadowRadius: 1,
              elevation: 5,
            },
            signInButtonText: {
              fontFamily: y.Playfair,
              fontSize: 14,
              fontWeight: "500",
              color: A.black,
            },
            orContainer: {
              flexDirection: "row",
              width: 355,
              justifyContent: "space-between",
              height: 30,
              alignItems: "center",
              paddingVertical: 40,
            },
            divider: {
              height: 1,
              width: 79,
              backgroundColor: A.primarybordercolor,
            },
            orText: {
              fontFamily: y.PoppinsLight,
              fontSize: 14,
              fontWeight: "300",
              color: A.primarygraycolor,
            },
            versionText: {
              color: A.primarygraycolor,
              fontFamily: y.PoppinsRegular,
              fontSize: 13,
              marginTop: 40,
            },
          }),
          Oe = () => {
            const e = (0, p.useNavigation)(),
              [t, n] = (0, d.useState)(!1),
              [o, s] = (0, d.useState)(""),
              [u, f] = (0, d.useState)(""),
              [m, x] = (0, d.useState)(""),
              [y, A] = (0, d.useState)(""),
              [w, b] = (0, d.useState)(""),
              [I, E] = (0, d.useState)(""),
              [k, B] = (0, d.useState)(""),
              [R, O] = (0, d.useState)(""),
              [P, M] = (0, d.useState)(""),
              [U, N] = (0, d.useState)(!1);
            (0, d.useEffect)(() => {
              (async () => {
                await j.default.getItem("unVerified_User");
              })();
            }, []);
            return (0, S.jsxs)(l.default, {
              style: Re.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  showsVerticalScrollIndicator: !1,
                  style: Re.scrollableContent,
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsxs)(i.default, {
                      style: Re.container,
                      children: [
                        (0, S.jsx)(se.default, {
                          animated: !0,
                          barStyle: "light-content",
                          backgroundColor: "transparent",
                          translucent: !0,
                        }),
                        (0, S.jsx)(c.default, {
                          style: Re.welcomeText,
                          children: "Register",
                        }),
                        (0, S.jsx)(c.default, {
                          style: Re.instructionsText,
                          children: "Create your account or login here",
                        }),
                        (0, S.jsxs)(i.default, {
                          style: Re.contentContainer,
                          children: [
                            (0, S.jsx)(he, {
                              value: y,
                              onChangeText: (e) =>
                                ((e) => {
                                  A(e), b("");
                                })(e),
                              placeholder: "Enter Your First Name",
                              maxLength: 30,
                              errorMessage: w,
                            }),
                            (0, S.jsx)(he, {
                              value: I,
                              onChangeText: (e) => E(e),
                              placeholder: "Enter Your Last  Name",
                              maxLength: 30,
                            }),
                            (0, S.jsx)(he, {
                              value: o,
                              onChangeText: (e) =>
                                ((e) => {
                                  s(e), B("");
                                })(e),
                              placeholder: " Enter Your Email address",
                              errorMessage: k,
                            }),
                            (0, S.jsx)(he, {
                              value: u,
                              onChangeText: (e) =>
                                ((e) => {
                                  /^\d*$/.test(e) && (f(e), x(""));
                                })(e),
                              placeholder: " Enter Phone Number",
                              errorMessage: m,
                            }),
                            (0, S.jsx)(he, {
                              value: R,
                              onChangeText: (e) => (O(e), void M("")),
                              placeholder: "Enter Password",
                              errorMessage: P,
                              isPassword: !0,
                            }),
                            (0, S.jsx)(h.default, {
                              onPress: () =>
                                U
                                  ? (async () => {
                                      n(!0);
                                      try {
                                        const t = { contact: o },
                                          n = C.RESEND_OTP,
                                          a = await v(n, t),
                                          i = a.data.data.access_token;
                                        await j.default.setItem(
                                          "verify_access_token",
                                          i
                                        ),
                                          a.data && e.navigate("Otp");
                                      } catch (t) {
                                        console.log("error login ---", t),
                                          "Account not found with provided email or phone." ==
                                            t.response.data.message &&
                                          404 == t.response.data.status
                                            ? B("Email not found")
                                            : "Email or phone number is required." ==
                                                t.response.data.message &&
                                              400 == t.response.data.status &&
                                              B("Email is Requied");
                                      } finally {
                                        n(!1);
                                      }
                                    })()
                                  : (async () => {
                                      n(!0);
                                      try {
                                        if ("" == y)
                                          return void b(
                                            "Enter Your First Name"
                                          );
                                        if ("" == o)
                                          return void B("Enter Your Email");
                                        if (!ke.test(o))
                                          return void B("Invalid email");
                                        if ("" == u)
                                          return void x(
                                            "Enter Your Phone Number"
                                          );
                                        if (10 !== u.length)
                                          return void x(
                                            "Enter only 10 digit Phone Number"
                                          );
                                        if ("" == R)
                                          return void M("Enter Your Password");
                                        if (!Be.test(R))
                                          return void M(
                                            "8+ chars, 1 upper, lower, number & symbol."
                                          );
                                        const t = JSON.stringify({
                                            email: o,
                                            password: R,
                                            phone_number: u,
                                            first_name: y,
                                            last_name: I,
                                          }),
                                          n = C.SIGN_UP,
                                          a = await v(n, t);
                                        console.log(
                                          "Api Token Register",
                                          JSON.stringify(
                                            a.data.data.access_token
                                          )
                                        );
                                        const i = a.data.data.access_token;
                                        await j.default.setItem(
                                          "verify_access_token",
                                          i
                                        ),
                                          await j.default.setItem(
                                            "mainProfile",
                                            a.data.data.user_id
                                          ),
                                          a.data && e.navigate("Otp"),
                                          await j.default.setItem(
                                            "unVerified_User",
                                            t
                                          );
                                      } catch (t) {
                                        console.log("error resigster:>> ", t),
                                          t.response.data.message.email
                                            ? (console.log(
                                                "error.response.data.message",
                                                t.response.data.message
                                              ),
                                              B(
                                                "User with this email address already exists." ==
                                                  t.response.data.message.email
                                                  ? "User already registered"
                                                  : ""
                                              ))
                                            : "User already created. Verify the OTP to activate your account." ==
                                                t.response.data.message &&
                                              400 == t.response.data.status &&
                                              (N(!0),
                                              B(
                                                "Account already exists. Please verify the OTP to activate it."
                                              )),
                                          console.error(
                                            "Registration Error:",
                                            t.response
                                              ? t.response.data
                                              : t.message
                                          );
                                      } finally {
                                        n(!1);
                                      }
                                    })(),
                              activeOpacity: 0.8,
                              style: Re.signInButton,
                              disabled: t,
                              children: t
                                ? (0, S.jsx)(de.default, { color: "black" })
                                : U
                                ? (0, S.jsx)(c.default, {
                                    style: Re.signInButtonText,
                                    children: "Send Otp",
                                  })
                                : (0, S.jsx)(c.default, {
                                    style: Re.signInButtonText,
                                    children: "Register",
                                  }),
                            }),
                          ],
                        }),
                        (0, S.jsxs)(i.default, {
                          style: Re.orContainer,
                          children: [
                            (0, S.jsx)(i.default, { style: Re.divider }),
                            (0, S.jsx)(c.default, {
                              numberOfLines: 1,
                              style: [Re.orText],
                              children: "Already have an account",
                            }),
                            (0, S.jsx)(i.default, { style: Re.divider }),
                          ],
                        }),
                        (0, S.jsx)(g.default, {
                          onPress: () => e.navigate("Login"),
                          style: Re.signInButton,
                          children: (0, S.jsx)(c.default, {
                            style: Re.signInButtonText,
                            children: "Already have Account",
                          }),
                        }),
                        (0, S.jsx)(c.default, {
                          style: Re.versionText,
                          children: "Version: 1.0",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          ve = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            container: {
              flex: 1,
              padding: 20,
              alignItems: "center",
              paddingTop: 50,
            },
            welcomeText: {
              fontWeight: "700",
              fontSize: 30,
              letterSpacing: 0.84,
              color: A.primeryWhite,
              fontFamily: y.Playfair,
              paddingVertical: 20,
            },
            contentContainer: { gap: 10, width: "100%", alignItems: "center" },
            signInButton: {
              width: "100%",
              maxWidth: 436,
              minWidth: 250,
              borderRadius: 46,
              height: 45,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1.2 },
              shadowOpacity: 0.17,
              shadowRadius: 1,
              elevation: 5,
            },
            signInButtonText: {
              fontFamily: y.Playfair,
              fontSize: 14,
              fontWeight: "500",
              color: A.black,
            },
            versionText: {
              color: A.primarygraycolor,
              fontFamily: y.PoppinsRegular,
              fontSize: 13,
              marginTop: 40,
            },
          }),
          Pe = () => {
            const e = (0, p.useNavigation)(),
              [t, n] = (0, d.useState)(!1),
              [o, s] = (0, d.useState)(""),
              [u, f] = (0, d.useState)(""),
              g = (0, p.useRoute)(),
              x = g.params?.forgotPassword;
            return (0, S.jsxs)(l.default, {
              style: ve.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: ve.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsxs)(i.default, {
                      style: ve.container,
                      children: [
                        (0, S.jsx)(se.default, {
                          animated: !0,
                          barStyle: "light-content",
                          backgroundColor: "transparent",
                          translucent: !0,
                        }),
                        (0, S.jsx)(c.default, {
                          style: ve.welcomeText,
                          children: "Enter OTP",
                        }),
                        (0, S.jsxs)(i.default, {
                          style: ve.contentContainer,
                          children: [
                            (0, S.jsx)(he, {
                              value: o,
                              onChangeText: (e) => (s(e), void f("")),
                              placeholder: "Enter The Otp Sended To Your Email",
                              errorMessage: u,
                            }),
                            (0, S.jsx)(h.default, {
                              onPress: () =>
                                x
                                  ? (async () => {
                                      n(!0);
                                      const t = { otp: o },
                                        a = await j.default.getItem(
                                          "verify_access_token"
                                        );
                                      if (!a)
                                        return (
                                          window.alert(
                                            "Alert\n\n Access token not found. Please log in again."
                                          ),
                                          void n(!1)
                                        );
                                      const i = C.VERIFY_FORGOT_PASSWORD_OTP;
                                      try {
                                        if ("" == o) return void f("Enter Otp");
                                        if (
                                          200 !== (await v(i, t, a)).data.status
                                        )
                                          throw new Error(
                                            "Invalid OTP or verification failed."
                                          );
                                        e.navigate("Forgot"),
                                          await j.default.removeItem(
                                            "unVerified_User"
                                          );
                                      } catch (r) {
                                        const e =
                                          r.response?.data?.message ||
                                          "Failed to verify OTP. Please try again.";
                                        m.default.alert("Error", e),
                                          400 == r.response?.data?.status &&
                                            f("Invalid Otp");
                                      } finally {
                                        n(!1);
                                      }
                                    })()
                                  : (async () => {
                                      n(!0);
                                      const t = { otp: o },
                                        a = await j.default.getItem(
                                          "verify_access_token"
                                        );
                                      if (!a)
                                        return (
                                          console.log(
                                            "Error",
                                            "Access token not found. Please log in again."
                                          ),
                                          window.alert(
                                            "Alert\n\n Access token not found. Please log in again."
                                          ),
                                          void n(!1)
                                        );
                                      const i = C.VERIFIY_OTP;
                                      try {
                                        if ("" == o) return void f("Enter Otp");
                                        if (
                                          200 !== (await v(i, t, a)).data.status
                                        )
                                          throw new Error(
                                            "Invalid OTP or verification failed."
                                          );
                                        await j.default.setItem(
                                          "access_token",
                                          a
                                        ),
                                          await j.default.removeItem(
                                            "verify_access_token"
                                          ),
                                          e.navigate("MainStack"),
                                          await j.default.removeItem(
                                            "unVerified_User"
                                          );
                                      } catch (r) {
                                        400 == r.response?.data?.status &&
                                          f("Invalid Otp");
                                      } finally {
                                        n(!1);
                                      }
                                    })(),
                              activeOpacity: 0.8,
                              style: ve.signInButton,
                              disabled: t,
                              children: t
                                ? (0, S.jsx)(de.default, { color: "white" })
                                : (0, S.jsx)(c.default, {
                                    style: ve.signInButtonText,
                                    children: "Submit OTP",
                                  }),
                            }),
                          ],
                        }),
                        (0, S.jsx)(c.default, {
                          style: ve.versionText,
                          children: "Version: 1.0",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          { width: Me, height: Ue } = u.default.get("screen"),
          De = a.default.create({
            container: {
              flex: 1,
              padding: 20,
              alignItems: "center",
              marginTop: 40,
            },
            headerView: {
              width: "100%",
              flexDirection: "row",
              marginTop: 0,
              alignItems: "center",
              justifyContent: "center",
            },
            backButton: {
              height: 24,
              width: 24,
              position: "absolute",
              left: 0,
              top: 7,
            },
            logo: { width: 66, height: 64 },
            welcomeText: {
              fontWeight: "700",
              fontSize: 30,
              letterSpacing: 0.84,
              color: A.primeryWhite,
              marginTop: 20,
              fontFamily: y.Playfair,
            },
            instructionsText: {
              fontFamily: y.PoppinsMedium,
              fontSize: 14,
              color: A.primeryWhite,
              marginBottom: 45,
            },
            input: {
              width: "100%",
              maxWidth: 436,
              minWidth: 325,
              borderRadius: 46,
              height: 45,
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 14,
              borderColor: A.primarybordercolor,
              fontFamily: y.PoppinsMedium,
              textAlign: "center",
              backgroundColor: A.white,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              outlineColor: "white",
              outlineStyle: "none",
              elevation: 5,
            },
            passwordInput: { width: "100%" },
            inputWeb: { outlineColor: "white", outlineStyle: "none" },
            errorText: {
              fontSize: 10,
              color: "red",
              fontFamily: y.PoppinsMedium,
              marginVertical: 5,
              textAlign: "left",
            },
            passwordContainer: {
              flexDirection: "row",
              width: "50%",
              maxWidth: 436,
              minWidth: 325,
              alignItems: "center",
              outlineColor: "white",
              outlineStyle: "none",
            },
            passwordToggle: {
              position: "absolute",
              height: 22,
              width: 22,
              right: "5%",
              top: 28,
              alignItems: "center",
              justifyContent: "center",
            },
            toggleImage: { height: 20, width: 20 },
            rememberMeContainer: {
              flexDirection: "row",
              width: "50%",
              maxWidth: 436,
              minWidth: 325,
              marginTop: 10,
              alignItems: "center",
            },
            checkbox: { height: 16, width: 16, marginRight: -6 },
            rememberMeText: {
              fontFamily: y.PoppinsRegular,
              fontSize: 14,
              fontWeight: "400",
              color: A.primarygraycolor,
              marginLeft: "3%",
            },
            forgotPassword: { marginTop: 33 },
            forgotPasswordText: {
              textDecorationLine: "underline",
              fontFamily: y.PoppinsLight,
              fontWeight: "500",
              fontSize: 14,
              color: A.darkpurple,
            },
            signInButton: {
              marginTop: 20,
              width: "50%",
              maxWidth: 436,
              minWidth: 325,
              borderRadius: 46,
              height: 45,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1.2 },
              shadowOpacity: 0.17,
              shadowRadius: 1,
              elevation: 5,
            },
            signInButtonText: {
              fontFamily: y.Playfair,
              fontSize: 14,
              fontWeight: "500",
              color: A.black,
            },
            orContainer: {
              flexDirection: "row",
              width: 345,
              justifyContent: "space-between",
              height: 30,
              alignItems: "center",
              marginTop: 34,
            },
            divider: {
              height: 1,
              width: 79,
              backgroundColor: A.primarybordercolor,
            },
            orText: {
              fontFamily: y.PoppinsLight,
              fontSize: 14,
              fontWeight: "300",
              color: A.primarygraycolor,
            },
            googleButton: {
              height: 45,
              width: "50%",
              maxWidth: 436,
              minWidth: 325,
              borderRadius: 46,
              borderWidth: 1,
              borderColor: A.primarybordercolor,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 13,
            },
            googleIcon: { height: 20, width: 20, marginRight: 20 },
            googleButtonText: {
              fontFamily: y.PoppinsMedium,
              fontSize: 14,
              fontWeight: "500",
              color: A.black,
            },
            signUpPrompt: { marginTop: 48 },
            signUpText: {
              fontFamily: y.PoppinsRegular,
              fontSize: 14,
              fontWeight: "500",
              color: A.primarygraycolor,
            },
            signUpLink: { color: A.primary },
            header: {
              height: 100,
              backgroundColor: "red",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1.2 },
              shadowOpacity: 30,
              shadowRadius: 1,
              elevation: 5,
            },
            headText: {
              color: "#6B7294",
              textAlign: "center",
              fontSize: 15,
              fontFamily: y.PoppinsLight,
            },
            LoginButton: {
              width: 97,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: A.primaryGreen,
              paddingVertical: 6,
              borderRadius: 32,
            },
          }),
          Ne = ({ navigation: e }) => {
            const [t, n] = (0, d.useState)(!0),
              [o, s] = (0, d.useState)(!1),
              [u, m] = (0, d.useState)(""),
              [p, x] = (0, d.useState)("");
            return (0, S.jsx)(r.default, {
              keyboardShouldPersistTaps: "handled",
              style: { backgroundColor: "white" },
              children: (0, S.jsxs)(l.default, {
                style: { flex: 1, padding: 20, height: Ue },
                children: [
                  (0, S.jsx)(D.LinearGradient, {
                    colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 1 },
                    style: a.default.absoluteFill,
                  }),
                  (0, S.jsxs)(i.default, {
                    style: {
                      width: "90%",
                      height: 240,
                      borderWidth: 1,
                      borderColor: A.white,
                      borderRadius: 16,
                      alignSelf: "center",
                      backgroundColor: "green",
                    },
                    children: [
                      (0, S.jsx)(f.default, {
                        source: w.Banner,
                        style: {
                          height: "100%",
                          width: "100%",
                          borderRadius: 16,
                        },
                      }),
                      (0, S.jsx)(c.default, {
                        style: {
                          color: A.white,
                          fontFamily: "PoppinsSemi",
                          position: "absolute",
                          margin: 20,
                        },
                        children: "Swiss X-Change",
                      }),
                    ],
                  }),
                  (0, S.jsxs)(i.default, {
                    style: De.container,
                    children: [
                      (0, S.jsx)(se.default, {
                        animated: !0,
                        barStyle: "light-content",
                        backgroundColor: "transparent",
                        translucent: !0,
                      }),
                      (0, S.jsx)(i.default, {
                        style: De.headerView,
                        children: (0, S.jsx)(g.default, {
                          onPress: () => e.goBack(),
                          style: De.backButton,
                        }),
                      }),
                      (0, S.jsx)(c.default, {
                        style: De.welcomeText,
                        children: "Enter New Password",
                      }),
                      (0, S.jsxs)(i.default, {
                        style: De.passwordContainer,
                        children: [
                          (0, S.jsx)(Y.default, {
                            style: [De.input, De.passwordInput],
                            placeholder: "Enter New Password",
                            value: p,
                            onChangeText: (e) => x(e),
                            secureTextEntry: t,
                          }),
                          (0, S.jsx)(g.default, {
                            onPress: () => n(!t),
                            style: De.passwordToggle,
                            children: (0, S.jsx)(f.default, {
                              source: t ? w.ShowP : w.HideP,
                              style: {
                                width: t ? 20 : 22,
                                height: t ? 15 : 20,
                                resizeMode: "contain",
                                tintColor: A.black,
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, S.jsxs)(i.default, {
                        style: De.passwordContainer,
                        children: [
                          (0, S.jsx)(Y.default, {
                            style: [De.input, De.passwordInput],
                            placeholder: "Confirm New Password",
                            value: u,
                            onChangeText: (e) => m(e),
                            secureTextEntry: t,
                          }),
                          (0, S.jsx)(g.default, {
                            onPress: () => n(!t),
                            style: De.passwordToggle,
                            children: (0, S.jsx)(f.default, {
                              source: t ? w.ShowP : w.HideP,
                              style: {
                                width: t ? 20 : 22,
                                height: t ? 15 : 20,
                                resizeMode: "contain",
                                tintColor: A.black,
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, S.jsx)(h.default, {
                        onPress: async () => {
                          try {
                            console.log("dflkhjkdf");
                          } catch (e) {
                            console.log("Error Sumiting Otp", e);
                          }
                        },
                        activeOpacity: 0.8,
                        style: De.signInButton,
                        children: o
                          ? (0, S.jsx)(de.default, { color: "white" })
                          : (0, S.jsx)(c.default, {
                              style: De.signInButtonText,
                              children: "Reset Pasword",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
          ze =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
          We = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            container: {
              flex: 1,
              padding: 20,
              alignItems: "center",
              paddingTop: 50,
            },
            welcomeText: {
              fontWeight: "700",
              fontSize: 30,
              letterSpacing: 0.84,
              color: A.primeryWhite,
              fontFamily: y.Playfair,
              paddingVertical: 20,
            },
            contentContainer: { gap: 10, width: "100%", alignItems: "center" },
            signInButton: {
              width: "100%",
              maxWidth: 436,
              minWidth: 250,
              borderRadius: 46,
              height: 45,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1.2 },
              shadowOpacity: 0.17,
              shadowRadius: 1,
              elevation: 5,
            },
            signInButtonText: {
              fontFamily: y.Playfair,
              fontSize: 14,
              fontWeight: "500",
              color: A.black,
            },
            versionText: {
              color: A.primarygraycolor,
              fontFamily: y.PoppinsRegular,
              fontSize: 13,
              marginTop: 40,
            },
          }),
          Fe = () => {
            const [e, t] = (0, d.useState)(!0),
              [n, o] = (0, d.useState)(!1),
              [s, u] = (0, d.useState)(""),
              [f, g] = (0, d.useState)(""),
              [m, x] = (0, d.useState)(""),
              [y, A] = (0, d.useState)(""),
              w = (0, p.useNavigation)();
            return (0, S.jsxs)(l.default, {
              style: We.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: We.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsxs)(i.default, {
                      style: We.container,
                      children: [
                        (0, S.jsx)(se.default, {
                          animated: !0,
                          barStyle: "light-content",
                          backgroundColor: "transparent",
                          translucent: !0,
                        }),
                        (0, S.jsx)(c.default, {
                          style: We.welcomeText,
                          children: "Create New Password",
                        }),
                        (0, S.jsxs)(i.default, {
                          style: We.contentContainer,
                          children: [
                            (0, S.jsx)(he, {
                              value: s,
                              onChangeText: (e) => (
                                u(e.trim()), x(""), void A("")
                              ),
                              placeholder: "Enter New Password",
                              errorMessage: m,
                              isPassword: !0,
                            }),
                            (0, S.jsx)(he, {
                              value: f,
                              onChangeText: (e) => (
                                g(e.trim()), A(""), void x("")
                              ),
                              placeholder: "Enter Confirm Password",
                              errorMessage: y,
                              isPassword: !0,
                            }),
                            (0, S.jsx)(h.default, {
                              onPress: () =>
                                (async () => {
                                  o(!0);
                                  const e = {
                                      new_password: s,
                                      confirm_new_password: f,
                                    },
                                    t = await j.default.getItem(
                                      "verify_access_token"
                                    );
                                  if (!t)
                                    return (
                                      window.alert(
                                        "Alert\n\nAccess token not found. Please log in again."
                                      ),
                                      void o(!1)
                                    );
                                  const n = C.UPDATE_FORGOT_PASSWORD;
                                  try {
                                    if ("" == s)
                                      return void x("Password requied");
                                    if (!ze.test(s))
                                      return void x(
                                        "8+ chars, 1 upper, lower, number & symbol."
                                      );
                                    if (f !== s)
                                      return void A("Password not matched");
                                    200 === (await v(n, e, t)).data.status &&
                                      w.navigate("Login");
                                  } catch (a) {
                                    ("token_not_valid" !=
                                      a.response.data.code &&
                                      401 != a.status) ||
                                      x("Token is invalid or expired");
                                  } finally {
                                    o(!1);
                                  }
                                })(),
                              activeOpacity: 0.8,
                              style: We.signInButton,
                              disabled: n,
                              children: n
                                ? (0, S.jsx)(de.default, { color: "black" })
                                : (0, S.jsx)(c.default, {
                                    style: We.signInButtonText,
                                    children: "Submit",
                                  }),
                            }),
                          ],
                        }),
                        (0, S.jsx)(c.default, {
                          style: We.versionText,
                          children: "Version: 1.0",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        var _e = n(9971),
          Le = n(4546);
        const Ve = () => {
            const e = (0, p.useRoute)(),
              { userData: t } = e.params;
            console.log("\ud83d\ude80 ~ EditProfile ~ userData:", t);
            const [n, o] = (0, d.useState)({}),
              [u, g] = (0, d.useState)({
                first_name: t?.first_name,
                last_name: t?.last_name,
                county_domicile: t?.county_domicile,
                languages_spoken: t?.languages_spoken,
                tarif_per_hour: t?.tarif_per_hour,
                purpose_of_life: t?.purpose_of_life,
                hobbies: t?.hobbies,
                user: t?.user,
                facebook_url: t?.facebook_url,
                linkedin_url: t?.linkedin_url,
                twitter_url: t?.twitter_url,
                instagram_url: t?.instagram_url,
              }),
              [m, x] = (0, d.useState)(
                Array.isArray(t?.professional_experience) &&
                  t.professional_experience.length > 0
                  ? t.professional_experience
                  : [
                      {
                        title: "",
                        organization: "",
                        duration: "",
                        description: "",
                        job_role: "",
                        job_field: "",
                        job_Duration: "",
                        job_Description: "",
                      },
                    ]
              ),
              [y, w] = (0, d.useState)({
                first_nameErr: null,
                last_nameErr: null,
                county_domicileErr: null,
                languages_spokenErr: null,
                purpose_of_lifeErr: null,
                hobbiesErr: null,
              }),
              [I, E] = (0, d.useState)(!1),
              k = ((0, s.default)().width, (0, p.useNavigation)());
            (0, d.useEffect)(() => {}, []);
            const B = (e, t) => {
                g((n) => Object.assign({}, n, { [e]: t }));
              },
              O = (e, t, n) => {
                const o = [...m];
                (o[e][t] = n), x(o);
              },
              v = (e, t) => {
                w((n) => Object.assign({}, n, { [e]: t }));
              };
            return (0, S.jsxs)(l.default, {
              style: He.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsx)(se.default, {}),
                (0, S.jsxs)(r.default, {
                  showsVerticalScrollIndicator: !1,
                  style: { flex: 1, width: "100%" },
                  contentContainerStyle: { paddingVertical: 20 },
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsxs)(i.default, {
                      style: He.bodyConatiner,
                      children: [
                        (0, S.jsx)(c.default, {
                          style: He.welcomeText,
                          children: "Edit Profile",
                        }),
                        (0, S.jsxs)(i.default, {
                          style: { gap: 20 },
                          children: [
                            (0, S.jsx)(i.default, {
                              style: {
                                width: 150,
                                height: 150,
                                borderRadius: 200,
                                backgroundColor: A.white,
                                overflow: "hidden",
                              },
                              children: (0, S.jsx)(f.default, {
                                source: {
                                  uri: n?.uri
                                    ? n?.uri
                                    : t?.avatar
                                    ? b + t?.avatar
                                    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
                                },
                                style: He.imageStyle,
                                resizeMode: "cover",
                              }),
                            }),
                            (0, S.jsx)(h.default, {
                              onPress: () =>
                                (async () => {
                                  if (
                                    !1 ===
                                    (
                                      await Le.requestMediaLibraryPermissionsAsync()
                                    ).granted
                                  )
                                    return void alert(
                                      "Permission to access media library is required!"
                                    );
                                  const e = await Le.launchImageLibraryAsync({
                                    mediaTypes: ["images"],
                                    allowsMultipleSelection: !1,
                                    quality: 1,
                                    base64: !0,
                                  });
                                  if (!e.canceled) {
                                    console.log("result===>>>", e);
                                    const t = e.assets.map((e) => ({
                                      uri: e.uri,
                                      base64: e.base64,
                                      name: e.fileName,
                                      media_type: "photo",
                                    }));
                                    console.log(
                                      "\ud83d\ude80 ~ selectedImages ~ selectedImages:",
                                      t[0]
                                    ),
                                      o(t[0]);
                                  }
                                })(),
                              style: {
                                backgroundColor: A.white,
                                padding: 10,
                                paddingHorizontal: 20,
                                borderRadius: 8,
                              },
                              children: (0, S.jsx)(c.default, {
                                style: { color: A.black },
                                children: "Setect image",
                              }),
                            }),
                          ],
                        }),
                        (0, S.jsxs)(i.default, {
                          style: He.container,
                          children: [
                            (0, S.jsx)(he, {
                              value: u.first_name,
                              onChangeText: (e) => [
                                B("first_name", e),
                                v("first_nameErr", null),
                              ],
                              placeholder: "Enter Your Name",
                              maxLength: 30,
                              errorMessage: y.first_nameErr,
                              numOfColumn: 3,
                              label: "First Name",
                              inputStyle: He.inputStyle,
                            }),
                            (0, S.jsx)(he, {
                              value: u.last_name,
                              onChangeText: (e) => B("last_name", e),
                              placeholder: "Enter Your Name",
                              maxLength: 30,
                              numOfColumn: 3,
                              label: "Last Name",
                              inputStyle: He.inputStyle,
                            }),
                            (0, S.jsx)(he, {
                              value: u.county_domicile,
                              onChangeText: (e) => [
                                B("county_domicile", e),
                                v("county_domicileErr", null),
                              ],
                              placeholder: "Enter Your County Domicile",
                              errorMessage: y.county_domicileErr,
                              numOfColumn: 3,
                              label: "County Domicile",
                              inputStyle: He.inputStyle,
                            }),
                            (0, S.jsx)(he, {
                              value: u.languages_spoken,
                              onChangeText: (e) => [
                                B("languages_spoken", e),
                                v("languages_spokenErr", null),
                              ],
                              placeholder: "Enter Languages Spoken",
                              errorMessage: y.languages_spokenErr,
                              numOfColumn: 3,
                              label: "Languages Spoken",
                              inputStyle: He.inputStyle,
                            }),
                            (0, S.jsx)(he, {
                              value: u.tarif_per_hour,
                              onChangeText: (e) => B("tarif_per_hour", e),
                              placeholder: "Enter Tarif Per Hour",
                              numOfColumn: 3,
                              label: "Tarif",
                              inputStyle: He.inputStyle,
                            }),
                            (0, S.jsx)(he, {
                              value: u.purpose_of_life,
                              onChangeText: (e) => [
                                B("purpose_of_life", e),
                                v("purpose_of_lifeErr", null),
                              ],
                              placeholder: "Purpose of Life",
                              errorMessage: y.purpose_of_lifeErr,
                              numOfColumn: 3,
                              label: "Purpose of Life",
                              inputStyle: He.inputStyle,
                            }),
                            (0, S.jsx)(he, {
                              value: u.hobbies,
                              onChangeText: (e) => [
                                B("hobbies", e),
                                v("hobbiesErr", null),
                              ],
                              placeholder: "Hobbies",
                              errorMessage: y.hobbiesErr,
                              numOfColumn: 3,
                              label: "Hobbies",
                              inputStyle: He.inputStyle,
                            }),
                          ],
                        }),
                        m.map((e, t) =>
                          (0, S.jsxs)(
                            i.default,
                            {
                              children: [
                                (0, S.jsxs)(i.default, {
                                  style: He.experienceHeading,
                                  children: [
                                    (0, S.jsxs)(c.default, {
                                      style: He.welcomeText,
                                      children: [
                                        "Professional Experience ",
                                        t + 1,
                                      ],
                                    }),
                                    m.length > 1 &&
                                      (0, S.jsx)(h.default, {
                                        onPress: () =>
                                          ((e) => {
                                            const t = m.filter(
                                              (t, n) => n !== e
                                            );
                                            x(t);
                                          })(t),
                                        style: [He.addBtn],
                                        children: (0, S.jsx)(ce.default, {
                                          name: "minus",
                                          color: A.black,
                                          size: 35,
                                        }),
                                      }),
                                  ],
                                }),
                                (0, S.jsxs)(i.default, {
                                  style: He.container,
                                  children: [
                                    (0, S.jsx)(he, {
                                      value: e.title,
                                      onChangeText: (e) => O(t, "title", e),
                                      placeholder: "Titile",
                                      numOfColumn: 3,
                                      label: "Titile",
                                      inputStyle: He.inputStyle,
                                    }),
                                    (0, S.jsx)(he, {
                                      value: e.organization,
                                      onChangeText: (e) =>
                                        O(t, "organization", e),
                                      placeholder: "Organization",
                                      numOfColumn: 3,
                                      label: "Organization",
                                      inputStyle: He.inputStyle,
                                    }),
                                    (0, S.jsx)(he, {
                                      value: e.duration,
                                      onChangeText: (e) => O(t, "duration", e),
                                      placeholder: "Duration",
                                      numOfColumn: 3,
                                      label: "Duration",
                                      inputStyle: He.inputStyle,
                                    }),
                                    (0, S.jsx)(he, {
                                      value: e.description,
                                      onChangeText: (e) =>
                                        O(t, "description", e),
                                      placeholder: "Description",
                                      numOfColumn: 3,
                                      label: "Description",
                                      inputStyle: He.inputStyle,
                                    }),
                                    (0, S.jsx)(he, {
                                      value: e.job_role,
                                      onChangeText: (e) => O(t, "job_role", e),
                                      placeholder: "Job Role",
                                      numOfColumn: 3,
                                      label: "Job Role",
                                      inputStyle: He.inputStyle,
                                    }),
                                    (0, S.jsx)(he, {
                                      value: e.job_field,
                                      onChangeText: (e) => O(t, "job_field", e),
                                      placeholder: "Job Field",
                                      numOfColumn: 3,
                                      label: "Job Field",
                                      inputStyle: He.inputStyle,
                                    }),
                                    (0, S.jsx)(he, {
                                      value: e.job_Duration,
                                      onChangeText: (e) =>
                                        O(t, "job_Duration", e),
                                      placeholder: "Job Duration",
                                      numOfColumn: 3,
                                      label: "Job Duration",
                                      inputStyle: He.inputStyle,
                                    }),
                                    (0, S.jsx)(he, {
                                      value: e.job_Description,
                                      onChangeText: (e) =>
                                        O(t, "job_Description", e),
                                      placeholder: "Job Description",
                                      numOfColumn: 3,
                                      label: "Job Description",
                                      inputStyle: He.inputStyle,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                        (0, S.jsx)(i.default, {
                          style: He.addContainer,
                          children: (0, S.jsx)(h.default, {
                            onPress: () => {
                              x((e) => [
                                ...e,
                                {
                                  title: "",
                                  organization: "",
                                  duration: "",
                                  description: "",
                                  job_role: "",
                                  job_field: "",
                                  job_Duration: "",
                                  job_Description: "",
                                },
                              ]);
                            },
                            style: He.addBtn,
                            children: (0, S.jsx)(_e.default, {
                              name: "add",
                              color: A.black,
                              size: 35,
                            }),
                          }),
                        }),
                        (0, S.jsx)(h.default, {
                          onPress: async () => {
                            if ((E(!0), "" == u.first_name))
                              return (
                                v("first_nameErr", "Enter Your Name"),
                                void E(!1)
                              );
                            if ("" == u.county_domicile)
                              return (
                                v(
                                  "county_domicileErr",
                                  "Enter Country Domicile"
                                ),
                                void E(!1)
                              );
                            if ("" == u.languages_spoken)
                              return (
                                v(
                                  "languages_spokenErr",
                                  "Enter Languages Spoken"
                                ),
                                void E(!1)
                              );
                            if ("" == u.purpose_of_life)
                              return (
                                v("purpose_of_lifeErr", "Purpose of Life"),
                                void E(!1)
                              );
                            if ("" == u.hobbies)
                              return (
                                v("hobbiesErr", "Enter Your Hobbies"),
                                void E(!1)
                              );
                            const e = await j.default.getItem("access_token");
                            if (!e)
                              return (
                                console.error("No access token found"),
                                void E(!1)
                              );
                            const t =
                              1 === m.length &&
                              Object.values(m[0]).every(
                                (e) => null == e || "" === String(e).trim()
                              )
                                ? []
                                : m.filter(
                                    (e, t) =>
                                      0 === t ||
                                      Object.values(e).some(
                                        (e) =>
                                          null != e && "" !== String(e).trim()
                                      )
                                  );
                            console.log(
                              "JSON.stringify(filteredExperience) :>> ",
                              t
                            );
                            const o = new FormData();
                            if (
                              (Object.entries(u).forEach(([e, t]) => {
                                o.append(e, null == t ? "" : String(t));
                              }),
                              n.uri)
                            ) {
                              const e = await fetch(n.uri),
                                t = await e.blob();
                              o.append("avatar", t, n.name);
                            }
                            o.append(
                              "professional_experience",
                              JSON.stringify(t)
                            );
                            const a = {
                              method: "put",
                              url: C.EDIT_PROFILE,
                              headers: {
                                "Content-Type": "multipart/form-data",
                                Accept: "application/json",
                                Authorization: `Bearer ${e}`,
                              },
                              data: o,
                            };
                            try {
                              const e = await R.default.request(a);
                              e?.data?.message &&
                                (k.navigate("Profile"),
                                console.log("Profile updated successfully"));
                            } catch (i) {
                              console.error("Error Update profile:", i);
                            } finally {
                              E(!1);
                            }
                          },
                          activeOpacity: 0.8,
                          style: He.UpdateButton,
                          disabled: I,
                          children: I
                            ? (0, S.jsx)(de.default, { color: "#000" })
                            : (0, S.jsx)(c.default, {
                                style: He.UpdateButtonText,
                                children: "Update Profile",
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          He = a.default.create({
            backGroundImg: {
              flex: 1,
              paddingHorizontal: 20,
              alignItems: "center",
              justifyContent: "center",
            },
            bodyConatiner: {
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            },
            welcomeText: {
              flex: 1,
              fontWeight: "700",
              fontSize: 30,
              letterSpacing: 0.84,
              color: A.primeryWhite,
              paddingVertical: 20,
              fontFamily: y.Playfair,
              textAlign: "center",
            },
            imageStyle: { width: 150, height: 150, resizeMode: "cover" },
            container: {
              width: "100%",
              gap: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            },
            inputStyle: { textAlign: "left" },
            experienceHeading: {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
            },
            UpdateButton: {
              marginTop: 20,
              width: "30%",
              maxWidth: 350,
              minWidth: 180,
              borderRadius: 46,
              height: 45,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1.2 },
              shadowOpacity: 0.17,
              shadowRadius: 1,
              elevation: 5,
            },
            UpdateButtonText: {
              fontFamily: y.Playfair,
              fontSize: 14,
              fontWeight: "500",
              color: A.black,
            },
            addContainer: {
              alignItems: "flex-end",
              justifyContent: "flex-end",
              width: "100%",
              paddingHorizontal: 20,
              flexDirection: "row",
              gap: 30,
            },
            addBtn: {
              backgroundColor: A.white,
              width: 50,
              height: 50,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            },
          }),
          Ye = ({ visible: e, onClose: t, onSelect: n, route: o }) => {
            const a =
              "communityPost" === o
                ? [
                    { id: "1", name: "Photo", icon: "\ud83d\uddbc\ufe0f" },
                    { id: "2", name: "Video", icon: "\ud83c\udfa5" },
                  ]
                : [
                    { id: "1", name: "Photo", icon: "\ud83d\uddbc\ufe0f" },
                    { id: "2", name: "Video", icon: "\ud83c\udfa5" },
                    { id: "3", name: "Text", icon: "\ud83d\udcdd" },
                    { id: "4", name: "PDF", icon: "\ud83d\udcc4" },
                    { id: "5", name: "Excel", icon: "\ud83d\udcca" },
                    { id: "6", name: "Word", icon: "\ud83d\udcc3" },
                  ];
            return (0, S.jsx)(F.default, {
              animationType: "slide",
              transparent: !0,
              visible: e,
              onRequestClose: t,
              children: (0, S.jsx)(i.default, {
                style: Ge.centeredView,
                children: (0, S.jsxs)(i.default, {
                  style: Ge.modalView,
                  children: [
                    (0, S.jsx)(c.default, {
                      style: Ge.modalTitle,
                      children: "Select File Type",
                    }),
                    (0, S.jsx)(W.default, {
                      data: a,
                      renderItem: ({ item: e }) =>
                        (0, S.jsx)(h.default, {
                          style: Ge.item,
                          onPress: () => {
                            n(e), t();
                          },
                          children: (0, S.jsxs)(i.default, {
                            children: [
                              (0, S.jsx)(c.default, {
                                style: Ge.icon,
                                children: e.icon,
                              }),
                              (0, S.jsx)(c.default, {
                                style: Ge.itemText,
                                children: e.name,
                              }),
                            ],
                          }),
                        }),
                      keyExtractor: (e) => e.id,
                      numColumns: 3,
                      contentContainerStyle: Ge.listContainer,
                    }),
                    (0, S.jsx)(h.default, {
                      style: [Ge.button, Ge.closeButton],
                      onPress: t,
                      children: (0, S.jsx)(i.default, {
                        children: (0, S.jsx)(c.default, {
                          style: Ge.textStyle,
                          children: "Close",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          Ge = a.default.create({
            centeredView: {
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            modalView: {
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              width: "50%",
              minWidth: 250,
              maxWidth: 400,
            },
            modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
            listContainer: { justifyContent: "center" },
            item: {
              padding: 15,
              margin: 5,
              alignItems: "center",
              justifyContent: "center",
              width: 80,
            },
            icon: { fontSize: 30, marginBottom: 5 },
            itemText: { fontSize: 14, textAlign: "center" },
            button: {
              borderRadius: 10,
              padding: 10,
              elevation: 2,
              marginTop: 15,
              width: "60%",
              alignItems: "center",
            },
            closeButton: { backgroundColor: "#191662" },
            textStyle: {
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            },
          });
        var Qe = n(76),
          Xe = n(2473);
        const Je = a.default.create({
            toggleContainer: {
              width: 60,
              height: 30,
              borderRadius: 30,
              padding: 2,
              justifyContent: "center",
            },
            circle: {
              width: 26,
              height: 26,
              borderRadius: 13,
              backgroundColor: "#fff",
            },
            label: { marginTop: 8, fontSize: 16, textAlign: "center" },
          }),
          Ke = ({ onToggle: e, initialValue: t = !1 }) => {
            const [n, o] = (0, d.useState)(t),
              a = (0, d.useState)(new Xe.default.Value(t ? 1 : 0))[0];
            (0, d.useEffect)(() => {
              e && e(n);
            }, [n]);
            const r = a.interpolate({
              inputRange: [0, 1],
              outputRange: [2, 32],
            });
            return (0, S.jsx)(g.default, {
              onPress: () => {
                Xe.default
                  .timing(a, {
                    toValue: n ? 0 : 1,
                    duration: 200,
                    useNativeDriver: !1,
                  })
                  .start(),
                  o((e) => !e);
              },
              children: (0, S.jsx)(i.default, {
                style: [
                  Je.toggleContainer,
                  { backgroundColor: n ? "#4cd137" : "#dcdde1" },
                ],
                children: (0, S.jsx)(Xe.default.View, {
                  style: [Je.circle, { transform: [{ translateX: r }] }],
                }),
              }),
            });
          },
          qe = {
            pdf: n(1577),
            word: n(4785),
            excel: n(2862),
            ppt: n(8149),
            audio: n(7019),
            video: n(3690),
            text: n(7993),
            link: n(5945),
            default: n(7993),
          },
          Ze = () => {
            const [e, t] = (0, d.useState)(""),
              [n, u] = (0, d.useState)(""),
              [g, m] = (0, d.useState)(""),
              [y, w] = (0, d.useState)([]),
              [b, j] = (0, d.useState)(""),
              [I, T] = (0, d.useState)([]),
              [E, k] = (0, d.useState)([]),
              [B, v] = (0, d.useState)(!1),
              [P, M] = (0, d.useState)(null),
              U = (0, p.useRoute)().params,
              [N, z] = (0, d.useState)(!1),
              [W, F] = (0, d.useState)(!1);
            console.log("\ud83d\ude80 ~ isFree:isFree", N);
            const _ = (0, p.useNavigation)(),
              { width: L } = (0, s.default)(),
              V = L < 769,
              H = L < 426;
            (0, d.useEffect)(() => {
              console.log("images-----", I);
            }, [I]);
            const G = async (e) => {
              const t = await Qe.getDocumentAsync({
                multiple: !0,
                type: e,
                copyToCacheDirectory: !1,
              });
              if (
                (console.log("result picker ==>>", t),
                !t.canceled || Array.isArray(t.assets))
              ) {
                const e = t.assets;
                console.log("fileList fileList ==> ", e);
                const n = e.map((e) => {
                  const t = e.name?.split(".").pop()?.toLowerCase(),
                    n = e.uri?.toLowerCase();
                  let o = "unknown";
                  return (
                    n?.startsWith("http://") || n?.startsWith("https://")
                      ? (o = "link")
                      : t
                      ? "pdf" === t
                        ? (o = "pdf")
                        : ["doc", "docx"].includes(t)
                        ? (o = "word")
                        : ["xls", "xlsx"].includes(t)
                        ? (o = "excel")
                        : ["ppt", "pptx"].includes(t)
                        ? (o = "ppt")
                        : ["mp4", "mov", "avi", "mkv"].includes(t)
                        ? (o = "video")
                        : [
                            "jpg",
                            "jpeg",
                            "png",
                            "gif",
                            "bmp",
                            "webp",
                            "heic",
                          ].includes(t)
                        ? (o = "photo")
                        : ["txt", "md", "csv"].includes(t)
                        ? (o = "text")
                        : ["mp3", "m4a", "aac", "wav", "ogg"].includes(t) &&
                          (o = "podcast")
                      : (o = "unknown"),
                    {
                      name: e.name,
                      mimeType: e.mimeType,
                      uri: e.uri,
                      media_type: o,
                    }
                  );
                });
                console.log("base64Files ==. ", n), w((e) => [...e, ...n]);
              }
            };
            return (0, S.jsxs)(o.default, {
              style: $e.container,
              children: [
                (0, S.jsx)(se.default, {}),
                (0, S.jsxs)(l.default, {
                  style: $e.backgroundImage,
                  resizeMode: "cover",
                  children: [
                    (0, S.jsx)(D.LinearGradient, {
                      colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                      start: { x: 0, y: 0 },
                      end: { x: 1, y: 1 },
                      style: a.default.absoluteFill,
                    }),
                    (0, S.jsxs)(x.default, {
                      intensity: 100,
                      style: [
                        $e.postContainer,
                        V && $e.smallPostContainer,
                        H && $e.mobilePostContainer,
                      ],
                      children: [
                        (0, S.jsx)(c.default, {
                          style: $e.modalTitle,
                          children:
                            "communityPost" === U?.screen
                              ? "Create Community Post"
                              : "Publish Something",
                        }),
                        (0, S.jsx)(i.default, {
                          style: $e.fileView,
                          children:
                            0 == y.length
                              ? (0, S.jsxs)(h.default, {
                                  style: {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderWidth: 1,
                                    borderColor: A.darkbordercolor,
                                    padding: 10,
                                    borderRadius: 8,
                                    borderStyle: "dashed",
                                  },
                                  onPress: () => v(!0),
                                  children: [
                                    (0, S.jsx)(ce.default, {
                                      name: "upload-to-cloud",
                                      size: 70,
                                    }),
                                    (0, S.jsx)(c.default, {
                                      children: "Upload Image",
                                    }),
                                  ],
                                })
                              : (0, S.jsxs)(S.Fragment, {
                                  children: [
                                    (0, S.jsx)(h.default, {
                                      onPress: () => v(!0),
                                      style: $e.imgPickerBtn,
                                      children: (0, S.jsx)(c.default, {
                                        style: $e.imgPickerTxt,
                                        children: "Upload Image",
                                      }),
                                    }),
                                    (0, S.jsx)(r.default, {
                                      style: $e.flatListContainer,
                                      horizontal: !0,
                                      indicatorStyle: "black",
                                      children: y.map((e, t) => {
                                        const n =
                                          ((o = e.mimeType),
                                          (a = e.name),
                                          o.startsWith("image/")
                                            ? null
                                            : o.startsWith("video/")
                                            ? qe.video
                                            : o.startsWith("audio/")
                                            ? qe.audio
                                            : o.includes("pdf")
                                            ? qe.pdf
                                            : o.includes("word")
                                            ? qe.word
                                            : o.includes("excel")
                                            ? qe.excel
                                            : o.includes("presentation")
                                            ? qe.ppt
                                            : o.includes("text")
                                            ? qe.text
                                            : "text/uri-list" === o ||
                                              a.includes("http")
                                            ? qe.link
                                            : qe.default);
                                        var o, a;
                                        return (0, S.jsx)(
                                          i.default,
                                          {
                                            style: $e.fileItem,
                                            children: n
                                              ? (0, S.jsx)(f.default, {
                                                  source: n,
                                                  style: $e.icon,
                                                })
                                              : (0, S.jsx)(f.default, {
                                                  source: { uri: e.uri },
                                                  style: $e.thumbnail,
                                                }),
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                        }),
                        (0, S.jsxs)(i.default, {
                          style: $e.titleView,
                          children: [
                            (0, S.jsx)(c.default, {
                              style: $e.titleText,
                              children: "Add Title",
                            }),
                            (0, S.jsx)(ee, {
                              inputStyle: {},
                              placeholder: "Title",
                              placeholderTextColor: A.lightBlack,
                              value: e,
                              onChangeText: (e) =>
                                ((e) => {
                                  t(e), m("");
                                })(e),
                              keyboardType: "ascii-capable",
                              error: g,
                            }),
                            (0, S.jsx)(c.default, {
                              style: $e.titleText,
                              children:
                                "communityPost" === U?.screen
                                  ? "Add Content"
                                  : "Add Description",
                            }),
                            (0, S.jsx)(ee, {
                              inputStyle: { height: 80 },
                              placeholder:
                                "communityPost" === U?.screen
                                  ? "Content"
                                  : "Description",
                              placeholderTextColor: A.lightBlack,
                              value: n,
                              onChangeText: (e) => u(e),
                              keyboardType: "ascii-capable",
                            }),
                            (0, S.jsxs)(i.default, {
                              style: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                              },
                              children: [
                                (0, S.jsxs)(i.default, {
                                  children: [
                                    (0, S.jsx)(c.default, {
                                      style: $e.titleText,
                                      children: "Paid",
                                    }),
                                    (0, S.jsx)(Ke, {
                                      onToggle: (e) => {
                                        console.log("Toggle value:", e),
                                          z(e),
                                          0 == e && F(!1);
                                      },
                                      initialValue: N,
                                    }),
                                  ],
                                }),
                                N &&
                                  (0, S.jsxs)(i.default, {
                                    children: [
                                      (0, S.jsx)(c.default, {
                                        style: $e.titleText,
                                        children: "Enter Price",
                                      }),
                                      (0, S.jsx)(Y.default, {
                                        value: b,
                                        onChangeText: (e) => {
                                          const t = e.replace(/[^0-9]/g, "");
                                          j(t);
                                        },
                                        keyboardType: "numeric",
                                        maxLength: 3,
                                        style: {
                                          height: 30,
                                          width: 100,
                                          backgroundColor: A.white,
                                          borderRadius: 10,
                                          padding: 10,
                                          textAlign: "center",
                                        },
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            N &&
                              (0, S.jsx)(c.default, {
                                style: $e.titleText,
                                children: "NFT",
                              }),
                            N &&
                              (0, S.jsx)(Ke, {
                                onToggle: (e) => {
                                  console.log("Toggle value:", e), F(e);
                                },
                                initialValue: W,
                              }),
                          ],
                        }),
                        (0, S.jsxs)(i.default, {
                          style: $e.bottomBar,
                          children: [
                            (0, S.jsx)(h.default, {
                              style: $e.postBtn,
                              onPress: () => _.goBack(),
                              children: (0, S.jsx)(c.default, {
                                style: $e.postButtonText,
                                children: "Cancel",
                              }),
                            }),
                            (0, S.jsx)(h.default, {
                              style: $e.postBtn,
                              onPress: () =>
                                (async () => {
                                  if ("" == e)
                                    return void m("Title is required");
                                  if (0 == y.length)
                                    return void m("Image is required");
                                  const t = await O();
                                  try {
                                    const o = new FormData();
                                    o.append("title", e),
                                      "communityPost" === U?.screen
                                        ? (o.append(
                                            "community",
                                            U?.community_id
                                          ),
                                          o.append("content", n),
                                          o.append("is_inappropriate", "false"))
                                        : o.append("description", n),
                                      o.append("is_free", !N),
                                      o.append("price", b),
                                      o.append("nft", W);
                                    for (let e = 0; e < y.length; e++) {
                                      const t = y[e];
                                      console.log(
                                        "\ud83d\ude80 ~ handlePost ~ file:",
                                        t
                                      );
                                      {
                                        const e = await fetch(t.uri),
                                          n = await e.blob();
                                        console.log(
                                          "\ud83d\ude80 ~ handlePost ~ response:",
                                          e
                                        ),
                                          console.log(
                                            "\ud83d\ude80 ~ handlePost ~ blob:",
                                            n
                                          ),
                                          o.append("media", n, t.name),
                                          o.append("media_type", t.media_type);
                                      }
                                    }
                                    const a = {
                                        method: "post",
                                        url:
                                          "communityPost" === U?.screen
                                            ? C.CREATE_COMMUNITY_POST
                                            : C.UPLOAD_CONTENT,
                                        headers: {
                                          Accept: "application/json",
                                          Authorization: `Bearer ${t}`,
                                        },
                                        data: o,
                                      },
                                      i = await R.default.request(a);
                                    console.log(
                                      "Api Responce Post data",
                                      i.data
                                    ),
                                      i.data &&
                                        (console.log(
                                          "User post data successfully"
                                        ),
                                        _.goBack());
                                  } catch (o) {
                                    console.error(
                                      "Post Error:",
                                      o.response ? o.response.data : o.message
                                    );
                                  }
                                })(),
                              children: (0, S.jsx)(c.default, {
                                style: $e.postButtonText,
                                children: "Post",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, S.jsx)(Ye, {
                      visible: B,
                      onClose: () => v(!1),
                      onSelect: (e) => {
                        M(e.name);
                        let t = [];
                        if ("Photo" === e.name) t = ["image/*"];
                        else if ("Video" === e.name) t = ["video/*"];
                        else if ("PDF" === e.name) t = ["application/pdf"];
                        else if ("MS files" === e.name)
                          t = [
                            "application/msword",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                            "application/vnd.ms-excel",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            "application/vnd.ms-powerpoint",
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                          ];
                        else if ("Word" === e.name)
                          t = [
                            "application/msword",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          ];
                        else if ("Excel" === e.name)
                          t = [
                            "application/vnd.ms-excel",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                          ];
                        else if ("PPT" === e.name)
                          t = [
                            "application/vnd.ms-powerpoint",
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                          ];
                        else if ("Text" === e.name) t = ["text/plain"];
                        else if ("Podcast" === e.name) t = ["audio/*"];
                        else if ("Link" === e.name)
                          return void console.log(
                            "Handle link separately (manual entry)"
                          );
                        G(t);
                      },
                      route: U?.screen,
                    }),
                  ],
                }),
              ],
            });
          },
          $e = a.default.create({
            container: { flex: 1 },
            backgroundImage: {
              flex: 1,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            },
            postContainer: {
              alignItems: "center",
              width: "60%",
              borderRadius: 8,
              paddingHorizontal: 10,
              marginLeft: 10,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              marginVertical: 20,
              padding: 20,
              paddingBottom: 70,
            },
            smallPostContainer: { width: "80%" },
            mobilePostContainer: { width: "95%" },
            modalTitle: {
              fontSize: 26,
              fontFamily: y.PoppinsSemi,
              color: A.white,
              marginVertical: 10,
            },
            fileView: {
              minHeight: 200,
              maxHeight: 250,
              width: "90%",
              backgroundColor: "white",
              borderRadius: 8,
              marginVertical: 10,
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: A.black,
            },
            titleView: { width: "90%", height: "20%" },
            titleText: {
              fontSize: 18,
              fontFamily: y.PoppinsSemi,
              color: A.white,
              marginVertical: 10,
            },
            bottomBar: {
              width: "90%",
              position: "absolute",
              bottom: 20,
              alignItems: "flex-end",
              zIndex: 100,
              flexDirection: "row",
              justifyContent: "space-between",
            },
            postBtn: {
              height: 40,
              width: "20%",
              backgroundColor: A.blue,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            },
            postButtonText: {
              fontSize: 16,
              fontFamily: y.PoppinsSemi,
              color: A.white,
            },
            imgPickerBtn: {
              position: "absolute",
              borderWidth: 1,
              bottom: -20,
              backgroundColor: A.blue,
              paddingVertical: 5,
              paddingHorizontal: 15,
              zIndex: 100,
              borderRadius: 8,
            },
            imgPickerTxt: { color: A.white, textAlign: "center", fontSize: 20 },
            imgView: { minWidth: 200, flex: 1, alignItems: "center" },
            imageStyle: {
              minWidth: 150,
              width: 150,
              height: 150,
              borderRadius: 8,
            },
            flatListContainer: {
              paddingHorizontal: 5,
              paddingVertical: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              marginBottom: 10,
            },
            fileItem: { marginRight: 15, alignItems: "center", width: 120 },
            icon: { width: 120, height: 120, resizeMode: "contain" },
            thumbnail: {
              width: 120,
              height: 120,
              borderRadius: 8,
              resizeMode: "cover",
            },
            fileName: {
              fontSize: 12,
              marginTop: 5,
              textAlign: "center",
              width: "100%",
            },
          }),
          et = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            contentContainer: {
              flex: 1,
              padding: 15,
              borderRadius: 10,
              marginTop: 20,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              width: "100%",
              gap: 20,
            },
            childContainer: {
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            },
            header: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            },
            headerBtn: { flexDirection: "row", alignItems: "center" },
            img: { height: 22, width: 22 },
            imgText: {
              color: "#fff",
              marginLeft: 10,
              textAlign: "center",
              fontFamily: "PoppinsSemi",
            },
            viewm: {
              borderWidth: 1,
              borderColor: "#fff",
              borderRadius: 10,
              padding: 10,
              width: "25%",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
            middileContainer: {
              flex: 1.5,
              minHeight: 450,
              justifyContent: "space-between",
              gap: 20,
            },
            serachInput: { padding: 8, width: "100%", color: A.white },
            searchView: {
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 10,
              width: "20%",
              minWidth: 60,
              alignItems: "center",
            },
            searchTxt: {
              fontSize: 20,
              color: "#fff",
              fontFamily: "PoppinsMedium",
            },
            cradContainer: {
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            },
            card: {
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#2D2B9B",
              marginVertical: 8,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 4,
              gap: 10,
              minWidth: 200,
            },
            image5: { height: 50, width: 50, borderRadius: 25 },
            title: {
              flex: 1,
              fontSize: 16,
              fontWeight: "bold",
              color: "#fff",
              fontFamily: "PoppinsMedium",
              alignSelf: "center",
            },
            messageImage: { height: 20, width: 20 },
            boxComm: {
              borderWidth: 1,
              borderColor: "#fff",
              padding: 10,
              borderRadius: 10,
              width: 120,
              height: 85,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
            boxtext: { color: "#fff" },
            boximg: {
              position: "absolute",
              bottom: 5,
              left: 80,
              height: 28,
              width: 28,
            },
          }),
          tt = () => {
            const e = (0, s.default)().width,
              t = e < 768,
              n = e < 480,
              o = (0, p.useNavigation)(),
              u = (0, p.useIsFocused)(),
              [g, m] = (0, d.useState)([]),
              [y, A] = (0, d.useState)([]),
              [j, I] = (0, d.useState)(null),
              [E, k] = (0, d.useState)([]);
            (0, d.useEffect)(() => {
              (async () => {
                const e = await O(),
                  t = C.BEST_COMMUNITIES,
                  n = C.BEST_CONTRIBUTOR;
                try {
                  const o = await P(t, e);
                  m(o.data.data);
                  const a = await P(n, e);
                  A(a.data.data),
                    console.log("resContributor.data.data :>> ", a.data.data);
                } catch (o) {
                  console.error("Error on get best communities", o);
                }
              })();
            }, [u]);
            const R = (e) => {
              console.log("fdkjhsdfh", e),
                o.navigate("CommunityDetail", { CommunityId: e.id });
            };
            return (0, S.jsxs)(l.default, {
              style: et.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: et.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: et.scrollableContentContainer,
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsx)(B, {}),
                    (0, S.jsxs)(x.default, {
                      intensity: 100,
                      style: et.contentContainer,
                      children: [
                        (0, S.jsxs)(i.default, {
                          style: [
                            et.childContainer,
                            { flexDirection: t ? "column" : "row" },
                          ],
                          children: [
                            (0, S.jsxs)(i.default, {
                              style: [
                                et.header,
                                { flexDirection: t ? "column" : "row" },
                              ],
                              children: [
                                (0, S.jsxs)(h.default, {
                                  style: et.headerBtn,
                                  onPress: () =>
                                    o.navigate("FollowedCommunity", {
                                      screen: "allCommunitiesList",
                                    }),
                                  children: [
                                    (0, S.jsx)(f.default, {
                                      source: w.CommImage1,
                                      style: et.img,
                                    }),
                                    (0, S.jsx)(c.default, {
                                      style: et.imgText,
                                      children: "All community",
                                    }),
                                  ],
                                }),
                                (0, S.jsxs)(h.default, {
                                  style: et.headerBtn,
                                  onPress: () =>
                                    (async () => {
                                      const e = await O(),
                                        t = C.MY_FOLLOWED_COMMUNITY;
                                      try {
                                        const n = await P(t, e);
                                        console.log(
                                          "response my followed community :>> ",
                                          n
                                        ),
                                          204 == n.status
                                            ? k(null)
                                            : 0 !== n.data.data.length
                                            ? k(n?.data?.data)
                                            : k(null);
                                      } catch (n) {
                                        console.log(
                                          "error my followed communities :>> ",
                                          n
                                        );
                                      }
                                    })(),
                                  children: [
                                    (0, S.jsx)(f.default, {
                                      source: w.CommImage2,
                                      style: et.img,
                                    }),
                                    (0, S.jsx)(c.default, {
                                      style: et.imgText,
                                      children: "My followed communities",
                                    }),
                                  ],
                                }),
                                (0, S.jsxs)(h.default, {
                                  style: et.headerBtn,
                                  onPress: () => o.navigate("CreateCommunity"),
                                  children: [
                                    (0, S.jsx)(f.default, {
                                      source: w.CommImage,
                                      style: et.img,
                                    }),
                                    (0, S.jsx)(c.default, {
                                      style: et.imgText,
                                      children: "Create a community",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, S.jsxs)(i.default, {
                              style: et.header,
                              children: [
                                (0, S.jsx)(h.default, {
                                  children: (0, S.jsx)(f.default, {
                                    source: w.Commessage,
                                  }),
                                }),
                                (0, S.jsx)(h.default, {
                                  children: (0, S.jsx)(f.default, {
                                    source: w.Comnoti,
                                  }),
                                }),
                                (0, S.jsx)(h.default, {
                                  children: (0, S.jsx)(f.default, {
                                    source: w.Commpp,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, S.jsxs)(i.default, {
                          style: [
                            et.childContainer,
                            { flexDirection: t ? "column" : "row" },
                          ],
                          children: [
                            (0, S.jsxs)(i.default, {
                              style: [
                                et.viewm,
                                {
                                  minWidth: n ? 200 : 300,
                                  width: n ? "100%" : "auto",
                                  height: 650,
                                  flex: 1,
                                },
                              ],
                              children: [
                                (0, S.jsx)(c.default, {
                                  numberOfLines: 2,
                                  style: [
                                    et.imgText,
                                    {
                                      fontSize: 18,
                                      width: "80%",
                                      marginVertical: 10,
                                    },
                                  ],
                                  children:
                                    "Best community proposed by algorithm",
                                }),
                                (0, S.jsx)(i.default, {
                                  style: { width: n ? "100%" : "80%", flex: 1 },
                                  children: (0, S.jsx)(W.default, {
                                    data: g,
                                    keyExtractor: (e, t) => t.toString(),
                                    showsVerticalScrollIndicator: !1,
                                    renderItem: ({ item: e }) =>
                                      (0, S.jsxs)(h.default, {
                                        style: et.card,
                                        onPress: () => R(e),
                                        children: [
                                          (0, S.jsx)(f.default, {
                                            source: e.creator_avatar
                                              ? { uri: b + e.creator_avatar }
                                              : w.Commpp,
                                            style: et.image5,
                                          }),
                                          (0, S.jsx)(c.default, {
                                            style: et.title,
                                            children: e.name,
                                          }),
                                          (0, S.jsx)(f.default, {
                                            source: w.Comnoti,
                                            style: et.messageImage,
                                          }),
                                        ],
                                      }),
                                  }),
                                }),
                              ],
                            }),
                            (0, S.jsxs)(i.default, {
                              style: [
                                et.middileContainer,
                                { minWidth: t ? "100%" : 350 },
                              ],
                              children: [
                                (0, S.jsxs)(i.default, {
                                  style: [
                                    et.viewm,
                                    {
                                      flexDirection: "row",
                                      width: "100%",
                                      height: 55,
                                    },
                                  ],
                                  children: [
                                    (0, S.jsx)(f.default, {
                                      source: w.search,
                                      style: { height: 18, width: 18 },
                                    }),
                                    (0, S.jsx)(Y.default, {
                                      style: [
                                        et.serachInput,
                                        { outlineStyle: "none" },
                                      ],
                                      placeholder: "Search a community",
                                      placeholderTextColor: "#fff",
                                      value: j ?? "",
                                      onChangeText: (e) => I(e),
                                    }),
                                    (0, S.jsx)(h.default, {
                                      style: et.searchView,
                                      onPress: async () => {
                                        const e = j.trim(),
                                          t = await O(),
                                          n = `${C.SEARCH_COMMUNITY}${e}`;
                                        try {
                                          const e = await P(n, t);
                                          0 !== e.data.data.length
                                            ? k(e?.data?.data)
                                            : k(null);
                                        } catch (o) {
                                          console.error(
                                            "Search API error==>>",
                                            o
                                          );
                                        }
                                      },
                                      children: (0, S.jsx)(c.default, {
                                        style: { color: "#000" },
                                        children: "Search",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, S.jsxs)(i.default, {
                                  style: {
                                    flex: 1,
                                    alignItems: "center",
                                    gap: 20,
                                  },
                                  children: [
                                    (0, S.jsx)(c.default, {
                                      style: et.searchTxt,
                                      children: "X-Change",
                                    }),
                                    (0, S.jsx)(i.default, {
                                      style: { width: "100%" },
                                      children: E
                                        ? (0, S.jsx)(W.default, {
                                            data: E,
                                            keyExtractor: (e, t) =>
                                              t.toString(),
                                            renderItem: ({ item: e }) =>
                                              (0, S.jsx)(h.default, {
                                                onPress: () => R(e),
                                                style: [
                                                  et.card,
                                                  { marginVertical: 4 },
                                                ],
                                                children: (0, S.jsx)(
                                                  c.default,
                                                  {
                                                    style: et.searchTxt,
                                                    children: e?.name,
                                                  }
                                                ),
                                              }),
                                          })
                                        : (0, S.jsx)(i.default, {
                                            style: [
                                              et.card,
                                              { marginVertical: 4 },
                                            ],
                                            children: (0, S.jsx)(c.default, {
                                              style: [
                                                et.searchTxt,
                                                {
                                                  textAlign: "center",
                                                  width: "100%",
                                                },
                                              ],
                                              children: "Not Found",
                                            }),
                                          }),
                                    }),
                                  ],
                                }),
                                (0, S.jsxs)(i.default, {
                                  style: et.cradContainer,
                                  children: [
                                    (0, S.jsxs)(h.default, {
                                      style: [et.boxComm],
                                      onPress: async () => {
                                        const e = await O(),
                                          t = C.GET_MY_COMMUNITIES;
                                        try {
                                          const n = await P(t, e);
                                          204 == n.status
                                            ? k(null)
                                            : 0 !== n.data.data.length
                                            ? k(n?.data?.data)
                                            : k(null);
                                        } catch (n) {
                                          console.error(
                                            "My Communities API error==>>",
                                            n
                                          );
                                        }
                                      },
                                      children: [
                                        (0, S.jsx)(c.default, {
                                          style: et.boxtext,
                                          children: "My Community",
                                        }),
                                        (0, S.jsx)(f.default, {
                                          source: w.ArrowL,
                                          style: et.boximg,
                                        }),
                                      ],
                                    }),
                                    (0, S.jsxs)(h.default, {
                                      style: et.boxComm,
                                      children: [
                                        (0, S.jsx)(c.default, {
                                          style: et.boxtext,
                                          children: "My Calendar",
                                        }),
                                        (0, S.jsx)(f.default, {
                                          source: w.ArrowL,
                                          style: et.boximg,
                                        }),
                                      ],
                                    }),
                                    (0, S.jsxs)(h.default, {
                                      style: et.boxComm,
                                      onPress: () =>
                                        o.navigate("MyQuesAndAnswer", {
                                          my_community: !0,
                                        }),
                                      children: [
                                        (0, S.jsx)(c.default, {
                                          style: et.boxtext,
                                          children: "My requests & answers",
                                        }),
                                        (0, S.jsx)(f.default, {
                                          source: w.ArrowL,
                                          style: et.boximg,
                                        }),
                                      ],
                                    }),
                                    (0, S.jsxs)(h.default, {
                                      style: et.boxComm,
                                      children: [
                                        (0, S.jsx)(c.default, {
                                          style: et.boxtext,
                                          children: "Settings & Data",
                                        }),
                                        (0, S.jsx)(f.default, {
                                          source: w.ArrowL,
                                          style: et.boximg,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, S.jsxs)(i.default, {
                              style: [
                                et.viewm,
                                {
                                  minWidth: n ? 200 : 300,
                                  width: n ? "100%" : "auto",
                                  height: 650,
                                  flex: 1,
                                },
                              ],
                              children: [
                                (0, S.jsx)(c.default, {
                                  style: [
                                    et.imgText,
                                    { fontSize: 18, marginVertical: 10 },
                                  ],
                                  children: "Best contributor",
                                }),
                                (0, S.jsx)(i.default, {
                                  style: { width: n ? "100%" : "80%", flex: 1 },
                                  children: (0, S.jsx)(W.default, {
                                    data: y,
                                    keyExtractor: (e, t) => t.toString(),
                                    showsVerticalScrollIndicator: !1,
                                    renderItem: ({ item: e }) =>
                                      (0, S.jsxs)(i.default, {
                                        style: [
                                          et.card,
                                          { flexDirection: "column" },
                                        ],
                                        children: [
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              flexDirection: "row",
                                              width: "100%",
                                              gap: 10,
                                            },
                                            children: [
                                              (0, S.jsx)(f.default, {
                                                source:
                                                  null == e.avatar
                                                    ? w.Commpp
                                                    : `${b}${e.avatar}`,
                                                style: et.image5,
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: et.title,
                                                children:
                                                  e.full_name ??
                                                  "Community name 1",
                                              }),
                                            ],
                                          }),
                                          !!e.description &&
                                            (0, S.jsx)(c.default, {
                                              style: [
                                                et.title,
                                                {
                                                  fontSize: 14,
                                                  alignSelf: "flex-start",
                                                },
                                              ],
                                              children: e.description,
                                            }),
                                        ],
                                      }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        var nt = n(5248);
        const ot = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            contentContainer: {
              flex: 1,
              width: "100%",
              padding: 15,
              backgroundColor: "#fff",
              borderRadius: 10,
              marginTop: 20,
            },
            heading: { fontSize: 24, fontWeight: "bold", color: "#9F77AA" },
          }),
          at = () =>
            (0, S.jsxs)(l.default, {
              style: ot.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: ot.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: ot.scrollableContentContainer,
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsx)(B, {}),
                    (0, S.jsx)(i.default, {
                      style: ot.contentContainer,
                      children: (0, S.jsx)(c.default, {
                        style: ot.heading,
                        children: "Hello, One to One UI!",
                      }),
                    }),
                  ],
                }),
              ],
            });
        var it = n(1094),
          rt = n(7366);
        const lt = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            container: {
              flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: 20,
            },
            closeButton: {
              position: "absolute",
              top: 20,
              right: 20,
              backgroundColor: "#9F77AA",
              padding: 10,
              borderRadius: 10,
            },
            button: {
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: A.white,
              borderRadius: 10,
              padding: 10,
            },
            closeText: { color: "#fff", fontWeight: "bold" },
            content: {
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: 50,
            },
            diffView: { flex: 1.5, minWidth: 300, maxWidth: 450 },
            searchView1: {
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 10,
              width: "25%",
              minWidth: 50,
              alignItems: "center",
            },
            viewm: {
              borderWidth: 1,
              borderColor: "#fff",
              borderRadius: 10,
              width: "25%",
              alignItems: "center",
            },
            image: {
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 20,
            },
            title: {
              fontSize: 20,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 10,
            },
            description: {
              fontSize: 16,
              color: "#666",
              textAlign: "center",
              marginTop: 20,
            },
            sameView: {
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: 10,
              maxWidth: 450,
              borderWidth: 1,
              borderColor: "#fff",
              alignItems: "center",
              height: "auto",
              paddingVertical: 10,
              gap: 10,
            },
            searchView: { padding: 5, borderRadius: 10, alignItems: "center" },
            CommonButt: {
              borderWidth: 1,
              borderColor: "#fff",
              padding: 10,
              height: 30,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              width: 90,
            },
            statusview: {
              backgroundColor: "#191362",
              padding: 10,
              alignItems: "center",
              width: 100,
              minWidth: 80,
              borderRadius: 10,
            },
            card: {
              backgroundColor: "#191362",
              padding: 10,
              borderRadius: 10,
              minWidth: 230,
              width: "90%",
            },
            row: { flexDirection: "row", alignItems: "center" },
            img: { width: 24, height: 24, resizeMode: "contain" },
            text: { fontSize: 16, color: "#fff", marginLeft: 8 },
            pickerWrapper: {
              borderWidth: 1,
              borderColor: "#fff",
              padding: 10,
              height: 30,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              width: 90,
            },
            picker: {
              height: 50,
              width: "100%",
              borderWidth: 0,
              backgroundColor: "transparent",
              color: A.white,
            },
          }),
          st = () => {
            const [e, t] = (0, d.useState)(null),
              [n, o] = (0, d.useState)("Select"),
              u = (0, p.useNavigation)(),
              g = (0, p.useIsFocused)(),
              m = (0, p.useRoute)(),
              { CommunityId: x } = m.params,
              y = [
                {
                  title: "My followed communities",
                  image: w.CommImage2,
                  onPress: () => u.navigate("FollowedCommunity"),
                },
                {
                  title: "Create a community",
                  image: w.CommImage,
                  onPress: () => u.navigate("CreateCommunity"),
                },
                {
                  title: "One to One",
                  image: w.OneByOne,
                  onPress: () => console.log("One to One"),
                },
                {
                  title: "My calendar",
                  image: w.Calander,
                  onPress: () => console.log("My calendar"),
                },
                {
                  title: "My request & answers",
                  image: w.Request,
                  onPress: () =>
                    u.navigate("MyQuesAndAnswer", { community_id: e.id }),
                },
                {
                  title: "Settings",
                  image: w.Setting,
                  onPress: () => console.log("Settings"),
                },
                {
                  title: "BACK TO ROOM",
                  image: w.Commback,
                  onPress: () => u.goBack(),
                },
              ];
            (0, d.useEffect)(() => {
              A();
            }, [x, g]);
            const A = async () => {
                const e = await O(),
                  n = `${C.COMMUNITY_LIST}${x}/`;
                try {
                  const o = await P(n, e);
                  console.log("get Data fecthed", o.data.data), t(o.data.data);
                } catch (o) {
                  console.log("get Data fecthing Error", o);
                }
              },
              b = (0, s.default)().width,
              j = b < 420;
            return (0, S.jsxs)(l.default, {
              style: lt.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: lt.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: lt.scrollableContentContainer,
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsx)(B, {}),
                    (0, S.jsx)(i.default, {
                      style: {
                        flex: 1,
                        borderRadius: 20,
                        overflow: "hidden",
                        marginTop: 20,
                        width: "100%",
                      },
                      children: (0, S.jsx)(l.default, {
                        source: e?.background_image
                          ? { uri: e.background_image }
                          : w.CommbackImg,
                        style: [lt.container, { maxHeight: 455 }],
                        children: (0, S.jsx)(r.default, {
                          contentContainerStyle: { padding: 20 },
                          showsVerticalScrollIndicator: !1,
                          children: (0, S.jsxs)(i.default, {
                            style: {
                              flexDirection: "row",
                              justifyContent: "center",
                              flexWrap: "wrap",
                              width: "100%",
                              gap: 20,
                            },
                            children: [
                              (0, S.jsxs)(i.default, {
                                style: [
                                  lt.sameView,
                                  { minWidth: j ? 250 : 350, maxHeight: 500 },
                                ],
                                children: [
                                  (0, S.jsxs)(i.default, {
                                    style: {
                                      flexDirection: "row",
                                      width: "90%",
                                      marginTop: 10,
                                      marginLeft: 14,
                                    },
                                    children: [
                                      (0, S.jsx)(f.default, {
                                        source: w.CommImage1,
                                      }),
                                      (0, S.jsx)(c.default, {
                                        style: {
                                          fontSize: 16,
                                          marginLeft: 10,
                                          color: "#fff",
                                        },
                                        children: "All community",
                                      }),
                                    ],
                                  }),
                                  (0, S.jsxs)(i.default, {
                                    style: [
                                      lt.viewm,
                                      {
                                        padding: 5,
                                        flexDirection: "row",
                                        width: "90%",
                                        alignItems: "center",
                                        height: 35,
                                      },
                                    ],
                                    children: [
                                      (0, S.jsx)(f.default, {
                                        source: w.search,
                                        style: { height: 14, width: 14 },
                                      }),
                                      (0, S.jsx)(Y.default, {
                                        style: [
                                          { padding: 5, width: "100%" },
                                          { outlineStyle: "none" },
                                        ],
                                        placeholder: "Search ",
                                        placeholderTextColor: "#fff",
                                      }),
                                      (0, S.jsx)(h.default, {
                                        style: lt.searchView,
                                        children: (0, S.jsx)(c.default, {
                                          style: { color: "#fff" },
                                          children: "Search",
                                        }),
                                      }),
                                    ],
                                  }),
                                  y.map((e, t) =>
                                    (0, S.jsx)(
                                      i.default,
                                      {
                                        style: lt.card,
                                        children: (0, S.jsxs)(h.default, {
                                          onPress: e.onPress,
                                          style: lt.row,
                                          children: [
                                            (0, S.jsx)(f.default, {
                                              source: e.image,
                                              style: lt.img,
                                            }),
                                            (0, S.jsx)(c.default, {
                                              style: lt.text,
                                              children: e.title,
                                            }),
                                          ],
                                        }),
                                      },
                                      t
                                    )
                                  ),
                                ],
                              }),
                              (0, S.jsxs)(i.default, {
                                style: [
                                  lt.diffView,
                                  {
                                    backgroundColor: "",
                                    minWidth: j ? 250 : 350,
                                  },
                                ],
                                children: [
                                  (0, S.jsx)(i.default, {
                                    style: {
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.5)",
                                      borderRadius: 10,
                                      borderWidth: 1,
                                      borderColor: "#fff",
                                      padding: 10,
                                    },
                                    children: (0, S.jsx)(c.default, {
                                      style: {
                                        fontSize: 20,
                                        color: "#fff",
                                        textAlign: "center",
                                      },
                                      children: e?.name,
                                    }),
                                  }),
                                  (0, S.jsx)(i.default, {
                                    style: {
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.5)",
                                      borderRadius: 10,
                                      borderWidth: 1,
                                      borderColor: "#fff",
                                      padding: 20,
                                      marginTop: 15,
                                    },
                                    children: (0, S.jsx)(c.default, {
                                      style: {
                                        fontSize: 18,
                                        color: "#fff",
                                        textAlign: "center",
                                      },
                                      children: e?.description,
                                    }),
                                  }),
                                  (0, S.jsxs)(i.default, {
                                    style: [
                                      lt.viewm,
                                      {
                                        flexDirection: "row",
                                        width: "100%",
                                        alignItems: "center",
                                        height: 55,
                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.5)",
                                        paddingHorizontal: 20,
                                        marginTop: 10,
                                        paddingVertical: 15,
                                      },
                                    ],
                                    children: [
                                      (0, S.jsx)(f.default, {
                                        source: w.search,
                                        style: { height: 18, width: 18 },
                                      }),
                                      (0, S.jsx)(Y.default, {
                                        style: [
                                          {
                                            backgroundColor: "",
                                            padding: 8,
                                            width: "100%",
                                          },
                                          { outlineStyle: "none" },
                                        ],
                                        placeholder: "Search Box",
                                        placeholderTextColor: "#fff",
                                      }),
                                      (0, S.jsx)(h.default, {
                                        style: lt.searchView1,
                                        children: (0, S.jsx)(c.default, {
                                          style: { color: "#191362" },
                                          children: "Search",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, S.jsxs)(i.default, {
                                    style: [
                                      lt.viewm,
                                      {
                                        width: "100%",
                                        backgroundColor: "#191362",
                                        paddingHorizontal: 20,
                                        marginTop: 10,
                                        paddingVertical: 10,
                                        marginVertical: 15,
                                      },
                                    ],
                                    children: [
                                      (0, S.jsxs)(i.default, {
                                        style: {
                                          flexDirection: "row",
                                          width: "100%",
                                        },
                                        children: [
                                          (0, S.jsx)(f.default, {
                                            source: w.Short,
                                          }),
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              fontSize: 16,
                                              color: "#fff",
                                              marginLeft: 10,
                                            },
                                            children: "Sort by",
                                          }),
                                        ],
                                      }),
                                      (0, S.jsxs)(i.default, {
                                        style: { width: "100%", gap: 10 },
                                        children: [
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              fontSize: 16,
                                              color: "#fff",
                                              marginVertical: 10,
                                              lineHeight: 20,
                                            },
                                            children:
                                              "Wall of the community to show the publication from the founders or the members (the founders can choose to allow or not the members to publish on the wall)",
                                          }),
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              fontSize: 14,
                                              color: "#fff",
                                              marginBottom: 10,
                                              lineHeight: 20,
                                            },
                                            children:
                                              "Possible content to be published on the community\u2019s wall : Photo, video, text, PDF, Excel, word, PPT, link, podcast, survey.",
                                          }),
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              fontSize: 14,
                                              color: "#fff",
                                              marginBottom: 10,
                                            },
                                            children:
                                              "Every publication can be Liked, disliked, comment, shared externally or saved",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, S.jsxs)(i.default, {
                                style: [
                                  lt.sameView,
                                  {
                                    minWidth: j ? 250 : 350,
                                    backgroundColor: "trasparent",
                                    borderWidth: 0,
                                    paddingVertical: 0,
                                  },
                                ],
                                children: [
                                  (0, S.jsxs)(i.default, {
                                    style: {
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.5)",
                                      flexDirection: j ? "column" : "row",
                                      padding: 10,
                                      alignItems: "center",
                                      borderWidth: 1,
                                      borderColor: "#fff",
                                      borderRadius: 10,
                                      gap: j ? 15 : 20,
                                      width: "100%",
                                    },
                                    children: [
                                      (0, S.jsxs)(h.default, {
                                        style: lt.button,
                                        onPress: () =>
                                          u.navigate("PublishPost", {
                                            screen: "communityPost",
                                            community_id: x,
                                          }),
                                        children: [
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              color: "#191362",
                                              fontSize: 14,
                                              fontFamily: "PoppinsRegular",
                                            },
                                            children: "Create a post",
                                          }),
                                          (0, S.jsx)(f.default, {
                                            source: w.Plus,
                                            style: {
                                              tintColor: "#191362",
                                              marginLeft: 10,
                                            },
                                          }),
                                        ],
                                      }),
                                      (0, S.jsxs)(i.default, {
                                        style: {
                                          flexDirection: "row",
                                          gap: 10,
                                        },
                                        children: [
                                          (0, S.jsx)(h.default, {
                                            style: [
                                              lt.CommonButt,
                                              { marginHorizontal: 0 },
                                            ],
                                            onPress: () =>
                                              (async () => {
                                                const t = await O(),
                                                  n = C.JOIN_COMMUNITIES,
                                                  o = { community_id: e.id };
                                                try {
                                                  const e = await v(n, o, t);
                                                  "Successfully joined the community." ==
                                                    e.data.message &&
                                                    200 == e.data.status &&
                                                    A(),
                                                    window.alert(
                                                      `Alert\n\n${e.data.message}`
                                                    );
                                                } catch (a) {
                                                  console.log(
                                                    "Join communities Error",
                                                    a
                                                  );
                                                }
                                              })(),
                                            children: (0, S.jsx)(c.default, {
                                              style: {
                                                color: "#fff",
                                                fontSize: 14,
                                                fontFamily: "PoppinsRegular",
                                              },
                                              children: e?.is_joined
                                                ? "Joined"
                                                : "Join",
                                            }),
                                          }),
                                          (0, S.jsx)(i.default, {
                                            style: lt.pickerWrapper,
                                            children: (0, S.jsxs)(rt.Picker, {
                                              selectedValue: n,
                                              onValueChange: (t) => {
                                                var n;
                                                (n = t),
                                                  console.log(
                                                    "\ud83d\ude80 ~ handleDropDown ~ item:",
                                                    n
                                                  ),
                                                  u.navigate(n, {
                                                    community_id: e.id,
                                                    backgroundImage:
                                                      e.background_image,
                                                  });
                                              },
                                              style: [
                                                lt.picker,
                                                { outlineStyle: "none" },
                                              ],
                                              dropdownIconColor: "#6200ee",
                                              mode: "dropdown",
                                              children: [
                                                (0, S.jsx)(rt.Picker.Item, {
                                                  label: "Select",
                                                  value: "Select",
                                                }),
                                                (0, S.jsx)(rt.Picker.Item, {
                                                  label: "Community Post",
                                                  value: "CommunityPostList",
                                                }),
                                                (0, S.jsx)(rt.Picker.Item, {
                                                  label:
                                                    "Update background image",
                                                  value: "CommunityBgImage",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, S.jsxs)(i.default, {
                                    style: {
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.5)",
                                      padding: 10,
                                      alignItems: "center",
                                      borderWidth: 1,
                                      borderColor: "#fff",
                                      borderRadius: 10,
                                      gap: 10,
                                      justifyContent: "center",
                                      width: "100%",
                                    },
                                    children: [
                                      (0, S.jsxs)(i.default, {
                                        style: {
                                          flexDirection: "row",
                                          justifyContent: "space-between",
                                          width: "100%",
                                          gap: 10,
                                        },
                                        children: [
                                          (0, S.jsxs)(i.default, {
                                            style: lt.statusview,
                                            children: [
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  color: "#fff",
                                                  fontSize: 16,
                                                },
                                                children: e?.members?.length,
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  color: "#fff",
                                                  fontSize: 14,
                                                },
                                                children: "Members",
                                              }),
                                            ],
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: lt.statusview,
                                            children: [
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  color: "#fff",
                                                  fontSize: 16,
                                                },
                                                children: "658",
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  color: "#fff",
                                                  fontSize: 14,
                                                },
                                                children: "Online",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, S.jsxs)(i.default, {
                                        style: {
                                          backgroundColor: "#191362",
                                          padding: 10,
                                          gap: 10,
                                          width: "100%",
                                          alignItems: "center",
                                          borderRadius: 10,
                                        },
                                        children: [
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              color: "#fff",
                                              fontSize: 16,
                                              marginTop: 10,
                                            },
                                            children:
                                              "Founders of the community",
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              flexDirection: "row",
                                              alignItems: "center",
                                              borderWidth: 1,
                                              padding: 5,
                                              borderRadius: 10,
                                              borderColor: "#fff",
                                              minWidth: 200,
                                              width: "100%",
                                            },
                                            children: [
                                              (0, S.jsx)(f.default, {
                                                source: w.Commpp,
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  marginLeft: 5,
                                                  color: "#fff",
                                                  fontSize: 16,
                                                },
                                                children: "Community name 1",
                                              }),
                                            ],
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              flexDirection: "row",
                                              alignItems: "center",
                                              borderWidth: 1,
                                              padding: 5,
                                              borderRadius: 10,
                                              borderColor: "#fff",
                                              minWidth: 200,
                                              width: "100%",
                                            },
                                            children: [
                                              (0, S.jsx)(f.default, {
                                                source: w.Commpp,
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  marginLeft: 5,
                                                  color: "#fff",
                                                  fontSize: 16,
                                                },
                                                children: "Community name 1",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, S.jsxs)(i.default, {
                                        style: {
                                          backgroundColor: "#191362",
                                          padding: 10,
                                          width: "100%",
                                          alignItems: "center",
                                          borderRadius: 10,
                                          gap: 10,
                                        },
                                        children: [
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              color: "#fff",
                                              fontSize: 16,
                                              marginTop: 10,
                                            },
                                            children: "Administrator",
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              flexDirection: "row",
                                              alignItems: "center",
                                              borderWidth: 1,
                                              padding: 5,
                                              borderRadius: 10,
                                              borderColor: "#fff",
                                              minWidth: 200,
                                              width: "100%",
                                            },
                                            children: [
                                              (0, S.jsx)(f.default, {
                                                source: w.Commpp,
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  marginLeft: 5,
                                                  color: "#fff",
                                                  fontSize: 16,
                                                },
                                                children: "Community name 1",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, S.jsxs)(i.default, {
                                        style: {
                                          backgroundColor: "#191362",
                                          padding: 10,
                                          width: "100%",
                                          alignItems: "center",
                                          borderRadius: 10,
                                          gap: 10,
                                        },
                                        children: [
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              color: "#fff",
                                              fontSize: 16,
                                              marginTop: 10,
                                            },
                                            children: "Rules of the community",
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              padding: 5,
                                              borderRadius: 10,
                                              borderColor: "#fff",
                                              minWidth: 200,
                                              width: "100%",
                                              gap: 10,
                                            },
                                            children: [
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  marginLeft: 5,
                                                  color: "#fff",
                                                  fontSize: 16,
                                                },
                                                children:
                                                  "1. Lorem Ipsum\xa0is simply du",
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  marginLeft: 5,
                                                  color: "#fff",
                                                  fontSize: 16,
                                                },
                                                children:
                                                  "2. Lorem Ipsum\xa0is simply dummy",
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  marginLeft: 5,
                                                  color: "#fff",
                                                  fontSize: 16,
                                                },
                                                children: "3. Lorem Ipsum",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, S.jsxs)(i.default, {
                                        style: {
                                          backgroundColor: "#191362",
                                          padding: 10,
                                          width: "100%",
                                          alignItems: "center",
                                          borderRadius: 10,
                                          gap: 10,
                                        },
                                        children: [
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              color: "#fff",
                                              fontSize: 16,
                                              marginTop: 10,
                                            },
                                            children: "Usefull link",
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              padding: 5,
                                              borderRadius: 10,
                                              borderColor: "#fff",
                                              minWidth: 200,
                                              width: "100%",
                                              gap: 10,
                                            },
                                            children: [
                                              (0, S.jsxs)(i.default, {
                                                style: {
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                  borderWidth: 1,
                                                  padding: 5,
                                                  borderRadius: 10,
                                                  borderColor: "#fff",
                                                  justifyContent:
                                                    "space-between",
                                                  width: "100%",
                                                },
                                                children: [
                                                  (0, S.jsx)(c.default, {
                                                    style: {
                                                      marginLeft: 5,
                                                      color: "#fff",
                                                      fontSize: 16,
                                                    },
                                                    children: "Wiki",
                                                  }),
                                                  (0, S.jsx)(f.default, {
                                                    source: w.ArrowDown,
                                                    style: { marginRight: 5 },
                                                  }),
                                                ],
                                              }),
                                              (0, S.jsxs)(i.default, {
                                                style: {
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                  borderWidth: 1,
                                                  padding: 5,
                                                  borderRadius: 10,
                                                  borderColor: "#fff",
                                                  justifyContent:
                                                    "space-between",
                                                  width: "100%",
                                                },
                                                children: [
                                                  (0, S.jsx)(c.default, {
                                                    style: {
                                                      marginLeft: 5,
                                                      color: "#fff",
                                                      fontSize: 16,
                                                    },
                                                    children: "Our Network",
                                                  }),
                                                  (0, S.jsx)(f.default, {
                                                    source: w.ArrowDown,
                                                    style: { marginRight: 5 },
                                                  }),
                                                ],
                                              }),
                                              (0, S.jsx)(i.default, {
                                                style: {
                                                  borderWidth: 1,
                                                  padding: 5,
                                                  borderRadius: 10,
                                                  borderColor: "#fff",
                                                  width: "100%",
                                                },
                                                children: (0, S.jsx)(
                                                  c.default,
                                                  {
                                                    style: {
                                                      marginLeft: 5,
                                                      color: "#fff",
                                                      fontSize: 16,
                                                    },
                                                    children:
                                                      "Daily Discussion",
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, S.jsxs)(i.default, {
                                        style: {
                                          backgroundColor: "#191362",
                                          padding: 10,
                                          width: "100%",
                                          borderRadius: 10,
                                        },
                                        children: [
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                            },
                                            children: [
                                              (0, S.jsx)(h.default, {
                                                style: {
                                                  backgroundColor: "#fff",
                                                  padding: 10,
                                                  borderRadius: 10,
                                                  marginHorizontal: 20,
                                                  width: "35%",
                                                  alignItems: "center",
                                                },
                                                children: (0, S.jsx)(
                                                  c.default,
                                                  {
                                                    style: {
                                                      color: "#000",
                                                      fontSize: 16,
                                                    },
                                                    children: "Calendar",
                                                  }
                                                ),
                                              }),
                                              (0, S.jsx)(h.default, {
                                                style: {
                                                  padding: 10,
                                                  borderRadius: 10,
                                                  marginHorizontal: 20,
                                                  borderWidth: 1,
                                                  borderColor: "#fff",
                                                  width: "35%",
                                                  alignItems: "center",
                                                },
                                                children: (0, S.jsx)(
                                                  c.default,
                                                  {
                                                    style: {
                                                      color: "#fff",
                                                      fontSize: 16,
                                                    },
                                                    children: "List event",
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                          (0, S.jsx)(i.default, {
                                            style: {
                                              width: "100%",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              marginTop: 10,
                                              marginLeft: 10,
                                            },
                                            children: (0, S.jsx)(it.default, {
                                              mode: "single",
                                              calendarTextStyle: {
                                                color: "white",
                                              },
                                              weekDaysTextStyle: {
                                                color: "white",
                                              },
                                              headerTextStyle: {
                                                color: "white",
                                              },
                                              headerButtonColor: "white",
                                              selectedItemColor: "white",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, S.jsxs)(i.default, {
                                        style: {
                                          backgroundColor: "#191362",
                                          padding: 10,
                                          width: "100%",
                                          alignItems: "center",
                                          borderRadius: 10,
                                        },
                                        children: [
                                          (0, S.jsx)(c.default, {
                                            style: {
                                              color: "#fff",
                                              fontSize: 16,
                                              marginTop: 10,
                                            },
                                            children: "Requests & Answers",
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: {
                                              marginVertical: 10,
                                              padding: 5,
                                              borderRadius: 10,
                                              borderColor: "#fff",
                                              minWidth: 200,
                                              width: "100%",
                                            },
                                            children: [
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  marginLeft: 5,
                                                  color: "#fff",
                                                  fontSize: 16,
                                                  marginBottom: 10,
                                                },
                                                children:
                                                  "Lorem Ipsum\xa0is simply dummy text",
                                              }),
                                              (0, S.jsx)(i.default, {
                                                style: {
                                                  borderWidth: 1,
                                                  borderColor: "#fff",
                                                  width: "100%",
                                                },
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: {
                                                  marginLeft: 5,
                                                  color: "#fff",
                                                  fontSize: 16,
                                                  marginVertical: 10,
                                                },
                                                children:
                                                  "Lorem Ipsum\xa0is simply dummy text Lorem Ipsum\xa0is simply dummy text",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
          },
          dt = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            container: {
              flex: 1,
              width: "100%",
              borderWidth: 1,
              borderColor: A.white,
              borderRadius: 16,
              marginTop: 20,
              paddingVertical: 20,
              alignItems: "center",
              gap: 20,
            },
            containerHeading: {
              color: A.white,
              fontSize: 28,
              fontFamily: "PoppinsSemi",
            },
            containerInputs: {
              width: "100%",
              gap: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            },
            inputStyle: { textAlign: "left" },
            UpdateButton: {
              marginTop: 20,
              width: "30%",
              maxWidth: 350,
              minWidth: 180,
              borderRadius: 46,
              height: 45,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1.2 },
              shadowOpacity: 0.17,
              shadowRadius: 1,
              elevation: 5,
            },
            UpdateButtonText: {
              fontFamily: y.Playfair,
              fontSize: 14,
              fontWeight: "500",
              color: A.black,
            },
          }),
          ct = () => {
            const e = (0, p.useNavigation)(),
              [t, n] = (0, d.useState)(!1),
              [o, u] = (0, d.useState)({
                members: [],
                name: "",
                description: "",
                category: "",
                allow_member_posts: !0,
                announcements: "",
              }),
              [f, g] = (0, d.useState)({}),
              [m, y] = (0, d.useState)({}),
              [A, w] = (0, d.useState)({
                nameErr: null,
                descriptionErr: null,
                categoryErr: null,
                announcementsErr: null,
              }),
              b = (e, t) => {
                u((n) => Object.assign({}, n, { [e]: t }));
              },
              j = (e, t) => {
                w((n) => Object.assign({}, n, { [e]: t }));
              };
            (0, s.default)().width;
            return (0, S.jsxs)(l.default, {
              style: dt.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: dt.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: dt.scrollableContentContainer,
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsx)(B, {}),
                    (0, S.jsxs)(x.default, {
                      intensity: 100,
                      style: dt.container,
                      children: [
                        (0, S.jsx)(c.default, {
                          style: dt.containerHeading,
                          children: "Create Community",
                        }),
                        (0, S.jsxs)(i.default, {
                          style: dt.containerInputs,
                          children: [
                            (0, S.jsx)(he, {
                              value: o.name,
                              onChangeText: (e) => [
                                b("name", e),
                                j("nameErr", null),
                              ],
                              placeholder: "Jhon Doe",
                              maxLength: 30,
                              errorMessage: A.nameErr,
                              numOfColumn: 2,
                              label: "Community Name",
                              inputStyle: dt.inputStyle,
                            }),
                            (0, S.jsx)(he, {
                              value: o.description,
                              onChangeText: (e) => [
                                b("description", e),
                                j("descriptionErr", null),
                              ],
                              placeholder: "This is a test description.",
                              errorMessage: A.descriptionErr,
                              numOfColumn: 2,
                              label: "Community Description",
                              inputStyle: dt.inputStyle,
                            }),
                            (0, S.jsx)(he, {
                              value: o.category,
                              onChangeText: (e) => [
                                b("category", e),
                                j("categoryErr", null),
                              ],
                              placeholder: "Technology",
                              errorMessage: A.categoryErr,
                              numOfColumn: 2,
                              label: "Community Category",
                              inputStyle: dt.inputStyle,
                            }),
                            (0, S.jsx)(he, {
                              value: o.announcements,
                              onChangeText: (e) => [
                                b("announcements", e),
                                j("announcementsErr", null),
                              ],
                              placeholder: "Welcome to the community!",
                              errorMessage: A.announcementsErr,
                              numOfColumn: 2,
                              label: "Community Announcement",
                              inputStyle: dt.inputStyle,
                            }),
                          ],
                        }),
                        (0, S.jsx)(h.default, {
                          onPress: () =>
                            (async () => {
                              n(!0);
                              const t = await O();
                              if ("" == o.name)
                                return (
                                  j("nameErr", "Enter Your Community Name"),
                                  void n(!1)
                                );
                              if ("" == o.description)
                                return (
                                  j(
                                    "descriptionErr",
                                    "Enter Community Description"
                                  ),
                                  void n(!1)
                                );
                              if ("" == o.category)
                                return (
                                  j("categoryErr", "Enter community Category"),
                                  void n(!1)
                                );
                              if ("" == o.announcements)
                                return (
                                  j("announcementsErr", "Enter Announcement"),
                                  void n(!1)
                                );
                              const a = Object.assign({}, o, {
                                  useful_links: f,
                                  calendar: m,
                                }),
                                i = C.CREATE_COMMUNITY;
                              try {
                                const n = await v(i, a, t);
                                201 == n.data.status &&
                                  "Community created successfully." ==
                                    n.data.message &&
                                  (window.alert(
                                    "Success\n\nYour community is successfully created"
                                  ),
                                  e.goBack());
                              } catch (r) {
                                console.log("error craete community :>> ", r);
                              } finally {
                                n(!1);
                              }
                            })(),
                          activeOpacity: 0.8,
                          style: dt.UpdateButton,
                          disabled: t,
                          children: t
                            ? (0, S.jsx)(de.default, { color: "#000" })
                            : (0, S.jsx)(c.default, {
                                style: dt.UpdateButtonText,
                                children: "Submit",
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          ut = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            container: {
              flex: 1,
              width: "100%",
              borderWidth: 1,
              borderColor: A.white,
              borderRadius: 16,
              marginTop: 20,
              paddingVertical: 20,
              alignItems: "center",
              gap: 20,
            },
            containerHeading: {
              color: A.white,
              fontSize: 28,
              fontFamily: "PoppinsSemi",
            },
            contentContainer: {
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 20,
            },
            card: {
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#2D2B9B",
              marginVertical: 8,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 4,
              gap: 10,
              minWidth: 200,
            },
            searchTxt: {
              fontSize: 20,
              color: "#fff",
              fontFamily: "PoppinsMedium",
            },
          }),
          ft = () => {
            const e = (0, p.useNavigation)(),
              [t, n] = (0, d.useState)([]),
              o = (0, s.default)().width,
              u = (0, s.default)().height,
              g = o < 800,
              m = (0, p.useRoute)().params,
              y = m?.screen;
            return (
              (0, d.useEffect)(() => {
                (async () => {
                  const e = await O(),
                    t =
                      "allCommunitiesList" === y
                        ? C.ALL_COMMUNITY_LIST
                        : C.MY_FOLLOWED_COMMUNITY;
                  console.log(
                    "\ud83d\ude80 ~ handleMyFollowedCommunity ~ URL:",
                    t
                  );
                  try {
                    const o = await P(t, e);
                    204 === o.status
                      ? n(null)
                      : o.data.data.length > 0
                      ? n(o?.data?.data)
                      : n(null);
                  } catch (o) {
                    console.log("error my followed communities :>> ", o);
                  }
                })();
              }, []),
              (0, S.jsxs)(l.default, {
                style: ut.backGroundImg,
                children: [
                  (0, S.jsx)(D.LinearGradient, {
                    colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                    start: { x: 0, y: 0 },
                    end: { x: 1, y: 1 },
                    style: a.default.absoluteFill,
                  }),
                  (0, S.jsxs)(r.default, {
                    keyboardShouldPersistTaps: "handled",
                    style: ut.scrollableContent,
                    showsVerticalScrollIndicator: !1,
                    contentContainerStyle: ut.scrollableContentContainer,
                    children: [
                      (0, S.jsx)(T, { backNavigation: !0 }),
                      (0, S.jsx)(B, {}),
                      (0, S.jsxs)(x.default, {
                        intensity: 100,
                        style: ut.container,
                        children: [
                          (0, S.jsx)(c.default, {
                            style: ut.containerHeading,
                            children:
                              "allCommunitiesList" === y
                                ? "All Communities "
                                : "Following Community",
                          }),
                          (0, S.jsxs)(i.default, {
                            style: [
                              ut.contentContainer,
                              { minHeight: u - 450, maxHeight: u - 450 },
                            ],
                            children: [
                              (0, S.jsx)(i.default, {
                                style: { width: "100%", flex: 1 },
                                children:
                                  null !== t
                                    ? (0, S.jsx)(W.default, {
                                        data: t,
                                        keyExtractor: (e, t) => t.toString(),
                                        showsVerticalScrollIndicator: !1,
                                        renderItem: ({ item: t }) =>
                                          (0, S.jsx)(h.default, {
                                            onPress: () =>
                                              ((t) => {
                                                console.log("fdkjhsdfh", t),
                                                  e.navigate(
                                                    "CommunityDetail",
                                                    { CommunityId: t.id }
                                                  );
                                              })(t),
                                            style: [
                                              ut.card,
                                              { marginVertical: 4 },
                                            ],
                                            children: (0, S.jsx)(c.default, {
                                              style: ut.searchTxt,
                                              children: t?.name,
                                            }),
                                          }),
                                      })
                                    : (0, S.jsx)(i.default, {
                                        style: [ut.card, { marginVertical: 4 }],
                                        children: (0, S.jsx)(c.default, {
                                          style: [
                                            ut.searchTxt,
                                            {
                                              textAlign: "center",
                                              width: "100%",
                                            },
                                          ],
                                          children: "Not Found",
                                        }),
                                      }),
                              }),
                              !g &&
                                (0, S.jsx)(i.default, {
                                  style: {
                                    flex: 1,
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  },
                                  children: (0, S.jsx)(f.default, {
                                    source: w.FollowingCommunity,
                                    style: { height: 300, width: 300 },
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            );
          };
        var ht = n(9814);
        const gt = ({ children: e, tooltipText: t, position: n = "top" }) => {
            const [o, a] = d.useState(!1),
              r = (e) => {
                a(e);
              };
            return (0, S.jsxs)(i.default, {
              style: mt.hoverContainer,
              children: [
                (0, S.jsx)(g.default, {
                  onHoverIn: () => r(!0),
                  onHoverOut: () => r(!1),
                  onPress: () => null,
                  style: ({ pressed: e }) => [mt.targetElement, e && !1],
                  children: e,
                }),
                o &&
                  (0, S.jsx)(i.default, {
                    style: [
                      mt.tooltip,
                      (() => {
                        const e = { alignSelf: "center" };
                        switch (n) {
                          case "bottom":
                            return Object.assign({}, e, {
                              top: "100%",
                              marginTop: 4,
                            });
                          case "left":
                            return Object.assign({}, e, {
                              right: "100%",
                              marginRight: 4,
                              top: -10,
                            });
                          case "right":
                            return Object.assign({}, e, {
                              left: "100%",
                              marginLeft: 4,
                              top: -10,
                            });
                          default:
                            return Object.assign({}, e, {
                              bottom: "100%",
                              marginBottom: 4,
                            });
                        }
                      })(),
                    ],
                    children: (0, S.jsx)(c.default, {
                      style: mt.tooltipText,
                      children: t,
                    }),
                  }),
              ],
            });
          },
          mt = a.default.create({
            hoverContainer: { position: "relative" },
            targetElement: {},
            pressed: { opacity: 0.7 },
            tooltip: {
              position: "absolute",
              backgroundColor: "#333",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 4,
              zIndex: 100,
              alignSelf: "center",
              flex: 1,
            },
            tooltipText: { color: "white", fontSize: 12 },
          }),
          pt = () => {
            (0, p.useNavigation)();
            const e = (0, s.default)().height,
              t = ((0, p.useRoute)(), !1),
              [n, o] = (0, d.useState)(null),
              [u, f] = (0, d.useState)(null),
              [g, m] = (0, d.useState)(null),
              [x, y] = (0, d.useState)(null),
              [w, b] = (0, d.useState)(null),
              [j, I] = (0, d.useState)(!1),
              [E, k] = (0, d.useState)(!1),
              [R, N] = (0, d.useState)(null),
              [z, F] = (0, d.useState)(null),
              [_, L] = (0, d.useState)(!1),
              V = async () => {
                try {
                  const e = await O(),
                    t = `${C.GET_COMMUNITY_REQUEST_QUESTION}1/`,
                    n = await P(t, e);
                  204 === n.status ? o([n]) : o(n?.data?.data);
                } catch (e) {
                  403 === e.status && f(e);
                }
              },
              H = async (e, t, n = !1) => {
                if ((k(!1), y(null), b(null), n));
                else if (z === e) return F(null), L(!1), void m(null);
                F(e), L(t);
                try {
                  const t = await O(),
                    n = `${C.GET_COMMUNITY_ANSWER}${e}/`,
                    o = await P(n, t);
                  204 === o.status ? m(null) : m(o?.data?.data);
                } catch (o) {
                  console.log("\ud83d\ude80 ~ handleGetAnswer ~ error:", o);
                }
              },
              Y = (e) => {
                y(e), b(null);
              },
              G = async (e) => {
                console.log("answer_id update answer list :>> ", e);
                try {
                  const t = await O(),
                    n = `${C.GET_EDITED_COMMUNITY_ANSWER}${e}/`,
                    o = await P(n, t);
                  console.log(
                    "\ud83d\ude80 ~ handleUpdateAnswerList ~ getResponse:",
                    o
                  );
                  const a = g.map((e) =>
                    e.id === o.data.data.id ? o.data.data : e
                  );
                  m(a);
                } catch (t) {
                  console.log(
                    "\ud83d\ude80 ~ handleUpdateAnswerList ~ error:",
                    t
                  );
                }
              };
            (0, d.useEffect)(() => {
              V();
            }, [1, t]);
            return (0, S.jsxs)(l.default, {
              style: xt.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: xt.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: xt.scrollableContentContainer,
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsx)(B, {}),
                    (0, S.jsxs)(i.default, {
                      style: [xt.bodyContentContainer, { minHeight: e - 360 }],
                      children: [
                        (0, S.jsxs)(i.default, {
                          style: xt.quesHeading,
                          children: [
                            (0, S.jsx)(c.default, {
                              style: xt.heading,
                              children: "Qustion Answer",
                            }),
                            null == u &&
                              (0, S.jsx)(h.default, {
                                style: xt.quesBtn,
                                onPress: () => (
                                  I(!0), k(!1), y(null), b(null), void N(null)
                                ),
                                children: (0, S.jsx)(c.default, {
                                  style: xt.quesText,
                                  children: "Ask!",
                                }),
                              }),
                          ],
                        }),
                        403 == u?.status &&
                          (0, S.jsx)(i.default, {
                            style: { alignItems: "center" },
                            children: (0, S.jsx)(c.default, {
                              style: [xt.ansText, { textAlign: "center" }],
                              children: u?.message,
                            }),
                          }),
                        j &&
                          (0, S.jsxs)(i.default, {
                            style: xt.inputContainer,
                            children: [
                              (0, S.jsx)(i.default, {
                                style: xt.inputBox,
                                children: (0, S.jsx)(he, {
                                  value: x ?? "",
                                  onChangeText: (e) => Y(e),
                                  placeholder:
                                    "What are the details of your problem?",
                                  inputStyle: xt.inputStyle,
                                  errorMessage: w,
                                }),
                              }),
                              (0, S.jsx)(h.default, {
                                style: xt.sendBtn,
                                onPress: () =>
                                  (async () => {
                                    if (null != x && "" !== x.trim())
                                      try {
                                        const e = await O(),
                                          t = `${C.CREATE_COMMUNITY_REQUEST_QUESTION}1/`,
                                          n = { title: x };
                                        await v(t, n, e), V(), I(!1), y(null);
                                      } catch (e) {
                                        console.log(
                                          "\ud83d\ude80 ~ handlecreateQues ~ error:",
                                          e
                                        );
                                      }
                                    else b("Required");
                                  })(),
                                children: (0, S.jsx)(c.default, {
                                  style: xt.sendTxt,
                                  children: " Send",
                                }),
                              }),
                            ],
                          }),
                        (0, S.jsx)(i.default, {
                          style: xt.contentContainer,
                          children: (0, S.jsx)(W.default, {
                            data: n,
                            renderItem: ({ item: e }) =>
                              204 === e.status
                                ? (0, S.jsx)(i.default, {
                                    style: xt.notFound,
                                    children: (0, S.jsx)(c.default, {
                                      style: [
                                        xt.ansText,
                                        { textAlign: "center" },
                                      ],
                                      children:
                                        "No questions have been asked yet.",
                                    }),
                                  })
                                : (0, S.jsxs)(i.default, {
                                    children: [
                                      (0, S.jsxs)(i.default, {
                                        style: xt.quesContainer,
                                        children: [
                                          (0, S.jsxs)(i.default, {
                                            style: xt.ques,
                                            children: [
                                              (0, S.jsx)(c.default, {
                                                style: xt.quesText,
                                                children: e.title,
                                              }),
                                              e.description &&
                                                (0, S.jsx)(c.default, {
                                                  style: xt.quesDescription,
                                                  children: e.description,
                                                }),
                                            ],
                                          }),
                                          (0, S.jsx)(h.default, {
                                            style: xt.questionExpand,
                                            onPress: () => {
                                              H(e.id, e.is_creator);
                                            },
                                            children: (0, S.jsx)($.default, {
                                              name:
                                                z === e.id ? "minus" : "plus",
                                              size: 24,
                                            }),
                                          }),
                                        ],
                                      }),
                                      z == e.id &&
                                        (0, S.jsxs)(i.default, {
                                          style: xt.answerBox,
                                          children: [
                                            null !== g
                                              ? g?.map((t, n) => {
                                                  if (t.request == e.id)
                                                    return (0, S.jsxs)(
                                                      i.default,
                                                      {
                                                        style: [
                                                          xt.answerStyle,
                                                          {
                                                            borderTopWidth:
                                                              n > 0 ? 1 : 0,
                                                          },
                                                        ],
                                                        children: [
                                                          (0, S.jsxs)(
                                                            i.default,
                                                            {
                                                              style: {
                                                                flexDirection:
                                                                  "row",
                                                                gap: 20,
                                                                alignItems:
                                                                  "center",
                                                              },
                                                              children: [
                                                                t.is_accepted &&
                                                                  (0, S.jsx)(
                                                                    gt,
                                                                    {
                                                                      tooltipText:
                                                                        "Accepted by author",
                                                                      position:
                                                                        "right",
                                                                      children:
                                                                        (0,
                                                                        S.jsx)(
                                                                          ht.default,
                                                                          {
                                                                            name:
                                                                              t.is_accepted &&
                                                                              "checkmark-done-sharp",
                                                                            size: 16,
                                                                            color:
                                                                              A.white,
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                (0, S.jsxs)(
                                                                  i.default,
                                                                  {
                                                                    style: {
                                                                      zIndex:
                                                                        -100,
                                                                    },
                                                                    children: [
                                                                      (0,
                                                                      S.jsx)(
                                                                        c.default,
                                                                        {
                                                                          style:
                                                                            xt.ansResponder,
                                                                          children:
                                                                            t.responder,
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      S.jsx)(
                                                                        c.default,
                                                                        {
                                                                          style:
                                                                            xt.ansText,
                                                                          children:
                                                                            t.text,
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                          R === t.id
                                                            ? (0, S.jsxs)(
                                                                i.default,
                                                                {
                                                                  style: [
                                                                    xt.inputContainer,
                                                                    {
                                                                      paddingTop: 5,
                                                                    },
                                                                  ],
                                                                  children: [
                                                                    (0, S.jsx)(
                                                                      i.default,
                                                                      {
                                                                        style:
                                                                          xt.inputBox,
                                                                        children:
                                                                          (0,
                                                                          S.jsx)(
                                                                            he,
                                                                            {
                                                                              value:
                                                                                x ??
                                                                                "",
                                                                              onChangeText:
                                                                                (
                                                                                  e
                                                                                ) =>
                                                                                  Y(
                                                                                    e
                                                                                  ),
                                                                              placeholder:
                                                                                "Edit Your Answer",
                                                                              inputStyle:
                                                                                xt.inputStyle,
                                                                              errorMessage:
                                                                                w,
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                    (0, S.jsx)(
                                                                      h.default,
                                                                      {
                                                                        style:
                                                                          xt.sendBtn,
                                                                        onPress:
                                                                          () =>
                                                                            (async (
                                                                              e
                                                                            ) => {
                                                                              if (
                                                                                null !=
                                                                                  x &&
                                                                                "" !==
                                                                                  x.trim()
                                                                              )
                                                                                try {
                                                                                  const t =
                                                                                      await O(),
                                                                                    n = `${C.EDIT_COMMUNITY_ANSWER}${e}/`,
                                                                                    o =
                                                                                      {
                                                                                        text: x.trim(),
                                                                                      };
                                                                                  200 ===
                                                                                    (
                                                                                      await M(
                                                                                        n,
                                                                                        o,
                                                                                        t
                                                                                      )
                                                                                    )
                                                                                      .status &&
                                                                                    G(
                                                                                      e
                                                                                    ),
                                                                                    N(
                                                                                      null
                                                                                    ),
                                                                                    y(
                                                                                      null
                                                                                    ),
                                                                                    b(
                                                                                      null
                                                                                    );
                                                                                } catch (t) {
                                                                                  console.log(
                                                                                    "\ud83d\ude80 ~ showEditAnswer ~ error:",
                                                                                    t
                                                                                  );
                                                                                }
                                                                              else
                                                                                b(
                                                                                  "Required"
                                                                                );
                                                                            })(
                                                                              t.id
                                                                            ),
                                                                        children:
                                                                          (0,
                                                                          S.jsx)(
                                                                            c.default,
                                                                            {
                                                                              style:
                                                                                xt.sendTxt,
                                                                              children:
                                                                                "Submit",
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              )
                                                            : (0, S.jsxs)(
                                                                i.default,
                                                                {
                                                                  style:
                                                                    xt.ansBottombar,
                                                                  children: [
                                                                    (0, S.jsx)(
                                                                      gt,
                                                                      {
                                                                        tooltipText:
                                                                          t.is_liked
                                                                            ? "Unlike"
                                                                            : "Like",
                                                                        children:
                                                                          (0,
                                                                          S.jsx)(
                                                                            h.default,
                                                                            {
                                                                              onPress:
                                                                                () =>
                                                                                  (async (
                                                                                    e,
                                                                                    t
                                                                                  ) => {
                                                                                    try {
                                                                                      const n =
                                                                                          await O(),
                                                                                        o = `${C.LIKE_UNLIKE_ANSWER}${e}/`,
                                                                                        a =
                                                                                          {
                                                                                            action:
                                                                                              t
                                                                                                ? "unlike"
                                                                                                : "like",
                                                                                            obj_type:
                                                                                              "answer",
                                                                                          },
                                                                                        i =
                                                                                          (await v(
                                                                                            o,
                                                                                            a,
                                                                                            n
                                                                                          ),
                                                                                          g?.map(
                                                                                            (
                                                                                              n
                                                                                            ) =>
                                                                                              n.id ===
                                                                                              e
                                                                                                ? Object.assign(
                                                                                                    {},
                                                                                                    n,
                                                                                                    {
                                                                                                      is_liked:
                                                                                                        !t,
                                                                                                    }
                                                                                                  )
                                                                                                : n
                                                                                          ));
                                                                                      m(
                                                                                        i
                                                                                      );
                                                                                    } catch (n) {
                                                                                      console.log(
                                                                                        "\ud83d\ude80 ~ handleLikeeAns ~ error:",
                                                                                        n
                                                                                      );
                                                                                    }
                                                                                  })(
                                                                                    t.id,
                                                                                    t.is_liked
                                                                                  ),
                                                                              children:
                                                                                (0,
                                                                                S.jsx)(
                                                                                  $.default,
                                                                                  {
                                                                                    name: t.is_liked
                                                                                      ? "like1"
                                                                                      : "like2",
                                                                                    size: 16,
                                                                                    color:
                                                                                      t.is_liked
                                                                                        ? A.blue
                                                                                        : A.white,
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                    (0, S.jsx)(
                                                                      gt,
                                                                      {
                                                                        tooltipText:
                                                                          "Edit",
                                                                        children:
                                                                          (0,
                                                                          S.jsx)(
                                                                            h.default,
                                                                            {
                                                                              onPress:
                                                                                () => {
                                                                                  return (
                                                                                    (e =
                                                                                      t.id),
                                                                                    N(
                                                                                      e
                                                                                    ),
                                                                                    k(
                                                                                      null
                                                                                    ),
                                                                                    y(
                                                                                      null
                                                                                    ),
                                                                                    b(
                                                                                      null
                                                                                    ),
                                                                                    void I(
                                                                                      !1
                                                                                    )
                                                                                  );
                                                                                  var e;
                                                                                },
                                                                              children:
                                                                                (0,
                                                                                S.jsx)(
                                                                                  $.default,
                                                                                  {
                                                                                    name: "edit",
                                                                                    size: 16,
                                                                                    color:
                                                                                      A.white,
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                    (0, S.jsx)(
                                                                      gt,
                                                                      {
                                                                        tooltipText:
                                                                          "Delete",
                                                                        children:
                                                                          (0,
                                                                          S.jsx)(
                                                                            h.default,
                                                                            {
                                                                              onPress:
                                                                                () =>
                                                                                  (async (
                                                                                    e
                                                                                  ) => {
                                                                                    const t =
                                                                                      window.confirm(
                                                                                        "Are you sure you want to delete answer?"
                                                                                      );
                                                                                    try {
                                                                                      if (
                                                                                        t
                                                                                      ) {
                                                                                        const t =
                                                                                            await O(),
                                                                                          n = `${C.DELETE_COMMUNITY_ANSWER}${e}/`,
                                                                                          o =
                                                                                            g?.filter(
                                                                                              (
                                                                                                t
                                                                                              ) =>
                                                                                                t.id !==
                                                                                                e
                                                                                            );
                                                                                        m(
                                                                                          o.length >
                                                                                            0
                                                                                            ? o
                                                                                            : null
                                                                                        ),
                                                                                          await U(
                                                                                            n,
                                                                                            t
                                                                                          );
                                                                                      } else
                                                                                        console.log(
                                                                                          "Cancelled"
                                                                                        );
                                                                                    } catch (n) {
                                                                                      console.log(
                                                                                        "\ud83d\ude80 ~ handleDeleteAnswer ~ error:",
                                                                                        n
                                                                                      );
                                                                                    }
                                                                                  })(
                                                                                    t.id
                                                                                  ),
                                                                              children:
                                                                                (0,
                                                                                S.jsx)(
                                                                                  $.default,
                                                                                  {
                                                                                    name: "delete",
                                                                                    size: 16,
                                                                                    color:
                                                                                      A.white,
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                    _ &&
                                                                      (0,
                                                                      S.jsx)(
                                                                        gt,
                                                                        {
                                                                          tooltipText:
                                                                            "Mark as Solve",
                                                                          children:
                                                                            (0,
                                                                            S.jsx)(
                                                                              h.default,
                                                                              {
                                                                                onPress:
                                                                                  () =>
                                                                                    (async (
                                                                                      e
                                                                                    ) => {
                                                                                      try {
                                                                                        const t =
                                                                                            await O(),
                                                                                          n = `${
                                                                                            C.MARK_ANS_AS_SOLVED +
                                                                                            e
                                                                                          }/`,
                                                                                          o =
                                                                                            {};
                                                                                        await v(
                                                                                          n,
                                                                                          o,
                                                                                          t
                                                                                        ),
                                                                                          H(
                                                                                            z,
                                                                                            !0,
                                                                                            !0
                                                                                          );
                                                                                      } catch (t) {
                                                                                        console.log(
                                                                                          "\ud83d\ude80 ~ handleSolveAnswer ~ error:",
                                                                                          t
                                                                                        ),
                                                                                          400 ===
                                                                                            t.status &&
                                                                                            "Answer is already accepted." ===
                                                                                              t.message &&
                                                                                            window.alert(
                                                                                              t.message
                                                                                            );
                                                                                      }
                                                                                    })(
                                                                                      t.id
                                                                                    ),
                                                                                children:
                                                                                  (0,
                                                                                  S.jsx)(
                                                                                    $.default,
                                                                                    {
                                                                                      name: "check",
                                                                                      size: 16,
                                                                                      color:
                                                                                        A.white,
                                                                                    }
                                                                                  ),
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                  ],
                                                                }
                                                              ),
                                                        ],
                                                      },
                                                      n
                                                    );
                                                })
                                              : (0, S.jsx)(i.default, {
                                                  style: [xt.answerStyle],
                                                  children: (0, S.jsx)(
                                                    c.default,
                                                    {
                                                      style: [
                                                        xt.ansResponder,
                                                        { textAlign: "center" },
                                                      ],
                                                      children:
                                                        "oh! Answer is not availble yet.",
                                                    }
                                                  ),
                                                }),
                                            E
                                              ? (0, S.jsxs)(i.default, {
                                                  style: xt.inputContainer,
                                                  children: [
                                                    (0, S.jsx)(i.default, {
                                                      style: xt.inputBox,
                                                      children: (0, S.jsx)(he, {
                                                        value: x ?? "",
                                                        onChangeText: (e) =>
                                                          Y(e),
                                                        placeholder:
                                                          "Your Valuable Answer",
                                                        inputStyle:
                                                          xt.inputStyle,
                                                        errorMessage: w,
                                                      }),
                                                    }),
                                                    (0, S.jsx)(h.default, {
                                                      style: xt.sendBtn,
                                                      onPress: () =>
                                                        (async (e) => {
                                                          if (
                                                            null !== x &&
                                                            "" !== x.trim()
                                                          )
                                                            try {
                                                              const t =
                                                                  await O(),
                                                                n = `${C.CREATE_COMMUNITY_ANSWER}${e}/`,
                                                                o = {
                                                                  text: x.trim(),
                                                                };
                                                              await v(n, o, t),
                                                                H(e, !0, !0),
                                                                k(!1),
                                                                y(null);
                                                            } catch (t) {
                                                              console.log(
                                                                "\ud83d\ude80 ~ handlecreateAns ~ error:",
                                                                t
                                                              );
                                                            }
                                                          else b("Required");
                                                        })(e.id),
                                                      children: (0, S.jsx)(
                                                        c.default,
                                                        {
                                                          style: xt.sendTxt,
                                                          children: "Submit",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                })
                                              : (0, S.jsx)(h.default, {
                                                  style: xt.ansTxt,
                                                  activeOpacity: 0.8,
                                                  onPress: () => (
                                                    k(!0),
                                                    I(!1),
                                                    y(null),
                                                    b(null),
                                                    void N(null)
                                                  ),
                                                  children: (0, S.jsx)(
                                                    c.default,
                                                    {
                                                      style: xt.ansBtnText,
                                                      children:
                                                        "Post Your Answer",
                                                    }
                                                  ),
                                                }),
                                          ],
                                        }),
                                    ],
                                  }),
                            keyExtractor: (e, t) => t.toString(),
                            contentContainerStyle: {
                              paddingBottom: 20,
                              gap: 20,
                            },
                            showsVerticalScrollIndicator: !1,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          xt = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            bodyContentContainer: {
              flex: 1,
              marginTop: 20,
              alignItems: "center",
              gap: 20,
              backgroundColor: "rgba(255,255, 255, 0.3)",
              width: "100%",
              height: "100%",
              borderRadius: 8,
              paddingVertical: 20,
            },
            quesHeading: {
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 20,
              alignItems: "center",
            },
            heading: {
              flex: 1,
              color: A.white,
              fontSize: 28,
              textAlign: "center",
            },
            quesBtn: {
              backgroundColor: A.white,
              padding: 10,
              borderRadius: 8,
              height: 40,
            },
            contentContainer: {
              flex: 1,
              gap: 10,
              width: "100%",
              paddingHorizontal: 20,
            },
            notFound: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            },
            quesContainer: {
              padding: 12,
              width: "100%",
              backgroundColor: A.white,
              flexDirection: "row",
            },
            ques: { flex: 1 },
            quesText: { color: A.black, fontSize: 16 },
            inputBox: { maxWidth: 436, minWidth: 250, width: "100%" },
            inputContainer: {
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingHorizontal: 20,
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
            },
            sendBtn: {
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 8,
              height: 45,
            },
            sendTxt: { color: A.black },
            inputStyle: { textAlign: "left" },
            quesDescription: { color: A.black, fontSize: 12 },
            questionExpand: { justifyContent: "center", alignItems: "center" },
            answerBox: {
              flex: 1,
              width: "100%",
              borderWidth: 1,
              borderColor: A.white,
              padding: 12,
              gap: 15,
            },
            answerStyle: { width: "100%", borderColor: A.black, gap: 5 },
            ansText: { color: A.white, fontSize: 16 },
            ansResponder: { color: A.white, fontSize: 12 },
            ansBottombar: {
              flexDirection: "row",
              gap: 15,
              paddingTop: 5,
              tintColor: A.white,
            },
            ansTxt: {
              padding: 10,
              borderRadius: 8,
              backgroundColor: A.white,
              width: 140,
              justifyContent: "center",
              alignItems: "center",
            },
            ansBtnText: { color: "black" },
          }),
          yt = () => {
            const [e, t] = (0, d.useState)([]),
              [n, o] = (0, d.useState)([]),
              [u, g] = (0, d.useState)(),
              [m, y] = (0, d.useState)(null),
              [b, j] = (0, d.useState)([]),
              [I, E] = (0, d.useState)(!1),
              [k, R] = (0, d.useState)(null),
              [N, z] = (0, d.useState)([]),
              F = (0, p.useRoute)(),
              { community_id: _, backgroundImage: L } = F.params;
            console.log("community_id :>> ", _);
            const { width: V } = (0, s.default)(),
              H = V < 800,
              Y = V < 426;
            (0, d.useEffect)(() => {
              G();
            }, []);
            const G = async () => {
                const e = await O(),
                  n = `${C.GET_COMMUNITY_POST + _}`;
                try {
                  const o = await P(n, e);
                  if (204 === o.status && "No Content" === o.statusText) {
                    t({
                      status: 204,
                      message:
                        "No posts have been shared in the community yet.",
                    });
                  } else
                    console.log("\ud83d\ude80 ~ GetPost ~ response:", o),
                      t(o.data.data),
                      console.log("response.data.data==>>", o.data.data);
                } catch (o) {
                  console.error("Error get post data:", o);
                }
              },
              Q = async (n, o) => {
                const a = await O(),
                  i = `${C.COMMUNITY_POST_REACTION + n}/`,
                  r = { action: o };
                try {
                  const o = await v(i, r, a),
                    l = o.data.data;
                  if (200 === o.status || 201 === o.status) {
                    const o = e.map((e) =>
                      e.id === n
                        ? Object.assign({}, e, {
                            is_disliked: l.is_disliked,
                            is_liked: l.is_liked,
                          })
                        : e
                    );
                    t(o);
                  }
                } catch (l) {
                  console.error("res error ===---\x3e>>", l);
                }
              },
              X = (e) => {
                u == e
                  ? (j(null), g(null))
                  : (j(null),
                    (async (e) => {
                      const t = await O(),
                        n = `${C.GET_COMMUNITY_POST_COMENT}${e}`;
                      try {
                        const e = await P(n, t);
                        j(e.data.data);
                      } catch (o) {
                        console.error("error get comment :>> ", o);
                      }
                    })(e),
                    g(e),
                    y(null));
              },
              J = async (e) => {
                const t = await O(),
                  n = `${C.DELETE_COMMUNITY_POST_COMENT}${e}/`;
                try {
                  await U(n, t);
                  const o = b.filter((t) => t.id !== e);
                  j(o);
                } catch (o) {
                  console.error("error comment reaction :>> ", o);
                }
              };
            return (0, S.jsxs)(l.default, {
              style: At.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: At.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: At.scrollableContentContainer,
                  children: [
                    (0, S.jsx)(T, { backNavigation: !0 }),
                    (0, S.jsx)(B, {}),
                    (0, S.jsx)(i.default, {
                      style: { flex: 1, width: "100%" },
                      children: (0, S.jsx)(x.default, {
                        intensity: 70,
                        style: At.blurViewContainer,
                        children: (0, S.jsx)(i.default, {
                          style: At.innerContainer,
                          children:
                            204 == e.status
                              ? (0, S.jsx)(i.default, {
                                  style: {
                                    flex: 1,
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  },
                                  children: (0, S.jsx)(c.default, {
                                    style: {
                                      color: A.white,
                                      width: "100%",
                                      textAlign: "center",
                                      fontSize: 22,
                                    },
                                    children: e.message,
                                  }),
                                })
                              : (0, S.jsx)(W.default, {
                                  data: e,
                                  keyExtractor: (e) => e.id.toString(),
                                  style: [
                                    At.scrollContainer,
                                    H && At.scrollContainerSmall,
                                  ],
                                  contentContainerStyle: At.contentContainer,
                                  scrollEnabled: !0,
                                  nestedScrollEnabled: !0,
                                  renderItem: ({ item: n }) =>
                                    (0, S.jsxs)(
                                      i.default,
                                      {
                                        style: At.dataItem,
                                        children: [
                                          (0, S.jsxs)(i.default, {
                                            style: [
                                              At.itemHeader,
                                              H && At.samallItemHeader,
                                            ],
                                            children: [
                                              (0, S.jsx)(c.default, {
                                                style: At.userInfo,
                                                children: n.creator,
                                              }),
                                              (0, S.jsxs)(i.default, {
                                                style: At.shareSaveContainer,
                                                children: [
                                                  (0, S.jsx)(f.default, {
                                                    source: w.share,
                                                    style: At.iconLarge,
                                                  }),
                                                  (0, S.jsx)(h.default, {
                                                    onPress: () =>
                                                      (async (n) => {
                                                        const o = await O(),
                                                          a = { post: n },
                                                          i =
                                                            C.SAVE_COMMUNITY_POST,
                                                          r = await Promise.all(
                                                            e.map(async (e) => {
                                                              if (e.id === n)
                                                                if (e.is_saved)
                                                                  try {
                                                                    const t = `${
                                                                        C.REMOVE_SAVE_COMMUNITY_POST +
                                                                        n
                                                                      }`,
                                                                      a =
                                                                        await U(
                                                                          t,
                                                                          o
                                                                        );
                                                                    if (
                                                                      (a.data
                                                                        .data,
                                                                      204 ===
                                                                        a.status)
                                                                    )
                                                                      return Object.assign(
                                                                        {},
                                                                        e,
                                                                        {
                                                                          is_saved:
                                                                            !1,
                                                                        }
                                                                      );
                                                                  } catch (t) {
                                                                    console.error(
                                                                      "Error removing content for post ID:",
                                                                      n,
                                                                      t
                                                                    );
                                                                  }
                                                                else
                                                                  try {
                                                                    const t =
                                                                        await v(
                                                                          i,
                                                                          a,
                                                                          o
                                                                        ),
                                                                      n =
                                                                        t.data
                                                                          .data;
                                                                    if (
                                                                      201 ===
                                                                        t.status &&
                                                                      e.id ===
                                                                        n.post
                                                                    )
                                                                      return Object.assign(
                                                                        {},
                                                                        e,
                                                                        {
                                                                          is_saved:
                                                                            !0,
                                                                        }
                                                                      );
                                                                  } catch (t) {
                                                                    console.error(
                                                                      "Error saving content for post ID:",
                                                                      n,
                                                                      t
                                                                    );
                                                                  }
                                                              return e;
                                                            })
                                                          );
                                                        t(r);
                                                      })(n.id),
                                                    children: (0, S.jsx)(
                                                      $.default,
                                                      {
                                                        name: "star",
                                                        color: n.is_saved
                                                          ? "#EACC6D"
                                                          : A.white,
                                                        size: 30,
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: At.itemSubHeader,
                                            children: [
                                              (0, S.jsx)(f.default, {
                                                source: w.comment,
                                                style: At.iconTiny,
                                              }),
                                              (0, S.jsx)(c.default, {
                                                style: At.commentText,
                                                children: "Comment",
                                              }),
                                            ],
                                          }),
                                          (0, S.jsx)(i.default, {
                                            style: At.descriptionWrapper,
                                            children: (0, S.jsx)(c.default, {
                                              style: At.itemDescription,
                                              numberOfLines: 2,
                                              children: n.description,
                                            }),
                                          }),
                                          (0, S.jsx)(q, {
                                            media: n.media,
                                            showDotIndicator:
                                              n.media.length > 1,
                                          }),
                                          (0, S.jsxs)(i.default, {
                                            style: [
                                              At.actionsRow,
                                              { paddingHorizontal: Y ? 0 : 20 },
                                            ],
                                            children: [
                                              (0, S.jsx)(i.default, {
                                                style: { flex: Y ? 0 : 1 },
                                              }),
                                              (0, S.jsxs)(h.default, {
                                                style: At.commentButton,
                                                onPress: () => X(n.id),
                                                children: [
                                                  (0, S.jsx)(f.default, {
                                                    source: w.comment,
                                                    style: At.iconTiny,
                                                  }),
                                                  (0, S.jsx)(c.default, {
                                                    style: { color: "#fff" },
                                                    children: "Comment",
                                                  }),
                                                ],
                                              }),
                                              (0, S.jsxs)(i.default, {
                                                style: At.likeContainer,
                                                children: [
                                                  (0, S.jsx)(h.default, {
                                                    onPress: () =>
                                                      Q(n.id, "like"),
                                                    children: (0, S.jsx)(
                                                      $.default,
                                                      {
                                                        name: "like1",
                                                        color: n.is_liked
                                                          ? A.likeBlue
                                                          : A.white,
                                                        size: 20,
                                                      }
                                                    ),
                                                  }),
                                                  (0, S.jsx)(h.default, {
                                                    onPress: () =>
                                                      Q(n.id, "dislike"),
                                                    children: (0, S.jsx)(
                                                      $.default,
                                                      {
                                                        name: "dislike1",
                                                        color: n.is_disliked
                                                          ? A.likeBlue
                                                          : A.white,
                                                        size: 20,
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          u == n.id &&
                                            (0, S.jsxs)(i.default, {
                                              style: At.commentContainer,
                                              children: [
                                                (0, S.jsxs)(i.default, {
                                                  style: At.commentInput,
                                                  children: [
                                                    (0, S.jsx)(i.default, {
                                                      style:
                                                        At.commentInputText,
                                                      children: (0, S.jsx)(ee, {
                                                        placeholder: "Comment",
                                                        placeholderTextColor:
                                                          A.lightBlack,
                                                        value: m,
                                                        onChangeText: y,
                                                        keyboardType:
                                                          "ascii-capable",
                                                      }),
                                                    }),
                                                    (0, S.jsx)(h.default, {
                                                      onPress: () =>
                                                        I
                                                          ? (async () => {
                                                              if (!k) return;
                                                              const e =
                                                                  await O(),
                                                                t = `${C.EDIT_COMMUNITY_POST_COMENT}${k}/`,
                                                                n = { text: m };
                                                              y(null);
                                                              try {
                                                                if (m) {
                                                                  const o =
                                                                      await M(
                                                                        t,
                                                                        n,
                                                                        e
                                                                      ),
                                                                    a = b.map(
                                                                      (e) =>
                                                                        e.id ===
                                                                        o.data
                                                                          .data
                                                                          .id
                                                                          ? Object.assign(
                                                                              {},
                                                                              e,
                                                                              {
                                                                                text: o
                                                                                  .data
                                                                                  .data
                                                                                  .text,
                                                                              }
                                                                            )
                                                                          : e
                                                                    );
                                                                  j(a),
                                                                    E(!1),
                                                                    R(null),
                                                                    y("");
                                                                } else
                                                                  console.log(
                                                                    "Empty field"
                                                                  );
                                                              } catch (o) {
                                                                console.error(
                                                                  "error comment create :>> ",
                                                                  o
                                                                );
                                                              }
                                                            })()
                                                          : (async (e) => {
                                                              const t =
                                                                  await O(),
                                                                n =
                                                                  C.CREATE_COMMUNITY_POST_COMENT,
                                                                o = {
                                                                  post_id: e,
                                                                  text: m,
                                                                };
                                                              if (m) {
                                                                y("");
                                                                try {
                                                                  const e = (
                                                                    await v(
                                                                      n,
                                                                      o,
                                                                      t
                                                                    )
                                                                  ).data.data;
                                                                  if (
                                                                    b &&
                                                                    b.length > 0
                                                                  ) {
                                                                    const t =
                                                                      b?.filter(
                                                                        (t) =>
                                                                          t.id !==
                                                                          e.id
                                                                      );
                                                                    j([
                                                                      e,
                                                                      ...t,
                                                                    ]);
                                                                  } else j([e]);
                                                                } catch (a) {
                                                                  console.error(
                                                                    "error comment create :>> ",
                                                                    a
                                                                  );
                                                                }
                                                              } else
                                                                console.log(
                                                                  "Empty input"
                                                                );
                                                              console.log(
                                                                "\ud83d\ude80 ~ handleCommentCreate ~ data:",
                                                                o
                                                              );
                                                            })(n.id),
                                                      style:
                                                        At.commentSubmitBtn,
                                                      children: (0, S.jsx)(
                                                        c.default,
                                                        {
                                                          children: I
                                                            ? "Update"
                                                            : "Submit",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, S.jsx)(i.default, {
                                                  style:
                                                    At.commentBorderDivider,
                                                }),
                                                (0, S.jsxs)(i.default, {
                                                  style: { gap: 10 },
                                                  children: [
                                                    (0, S.jsx)(c.default, {
                                                      style: At.commentTitle,
                                                      children: "Comments",
                                                    }),
                                                    b && b.length > 0
                                                      ? (0, S.jsx)(W.default, {
                                                          data: b,
                                                          contentContainerStyle:
                                                            At.flatListContent,
                                                          scrollEnabled: !1,
                                                          nestedScrollEnabled:
                                                            !0,
                                                          keyExtractor: (e) =>
                                                            e.id.toString(),
                                                          renderItem: (e) =>
                                                            (0, S.jsxs)(
                                                              i.default,
                                                              {
                                                                style:
                                                                  At.commentBox,
                                                                children: [
                                                                  (0, S.jsx)(
                                                                    c.default,
                                                                    {
                                                                      style:
                                                                        At.commentUser,
                                                                      children:
                                                                        e.item
                                                                          .user,
                                                                    }
                                                                  ),
                                                                  (0, S.jsx)(
                                                                    c.default,
                                                                    {
                                                                      style:
                                                                        At.commentBoxText,
                                                                      children:
                                                                        e.item
                                                                          .text,
                                                                    }
                                                                  ),
                                                                  (0, S.jsxs)(
                                                                    i.default,
                                                                    {
                                                                      style:
                                                                        At.alignCommentIcons,
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          S.jsx)(
                                                                            h.default,
                                                                            {
                                                                              onPress:
                                                                                () => {
                                                                                  (async (
                                                                                    e
                                                                                  ) => {
                                                                                    const t =
                                                                                        await O(),
                                                                                      n =
                                                                                        C.COMMUNITY_POST_COMENT_REACTION,
                                                                                      o =
                                                                                        {
                                                                                          comment_id:
                                                                                            e,
                                                                                        },
                                                                                      a =
                                                                                        b.find(
                                                                                          (
                                                                                            t
                                                                                          ) =>
                                                                                            t.id ===
                                                                                            e
                                                                                        );
                                                                                    if (
                                                                                      a
                                                                                    )
                                                                                      if (
                                                                                        a.is_liked
                                                                                      )
                                                                                        try {
                                                                                          const n = `${C.COMMUNITY_POST_COMENT_REACTION_REMOVE}${e}`;
                                                                                          if (
                                                                                            204 ===
                                                                                            (
                                                                                              await U(
                                                                                                n,
                                                                                                t
                                                                                              )
                                                                                            )
                                                                                              .status
                                                                                          ) {
                                                                                            const t =
                                                                                              b.map(
                                                                                                (
                                                                                                  t
                                                                                                ) =>
                                                                                                  t.id ===
                                                                                                  e
                                                                                                    ? Object.assign(
                                                                                                        {},
                                                                                                        t,
                                                                                                        {
                                                                                                          is_liked:
                                                                                                            !1,
                                                                                                          likes_count:
                                                                                                            Math.max(
                                                                                                              0,
                                                                                                              t.likes_count -
                                                                                                                1
                                                                                                            ),
                                                                                                        }
                                                                                                      )
                                                                                                    : t
                                                                                              );
                                                                                            j(
                                                                                              t
                                                                                            );
                                                                                          } else
                                                                                            console.log(
                                                                                              "Already unliked comment"
                                                                                            );
                                                                                        } catch (i) {
                                                                                          console.error(
                                                                                            "error comment reaction :>> ",
                                                                                            i
                                                                                          );
                                                                                        }
                                                                                      else
                                                                                        try {
                                                                                          if (
                                                                                            201 ===
                                                                                            (
                                                                                              await v(
                                                                                                n,
                                                                                                o,
                                                                                                t
                                                                                              )
                                                                                            )
                                                                                              .status
                                                                                          ) {
                                                                                            const t =
                                                                                              b.map(
                                                                                                (
                                                                                                  t
                                                                                                ) =>
                                                                                                  t.id ===
                                                                                                  e
                                                                                                    ? Object.assign(
                                                                                                        {},
                                                                                                        t,
                                                                                                        {
                                                                                                          is_liked:
                                                                                                            !0,
                                                                                                          likes_count:
                                                                                                            t.likes_count +
                                                                                                            1,
                                                                                                        }
                                                                                                      )
                                                                                                    : t
                                                                                              );
                                                                                            j(
                                                                                              t
                                                                                            );
                                                                                          } else
                                                                                            console.log(
                                                                                              "Already liked comment"
                                                                                            );
                                                                                        } catch (i) {
                                                                                          console.error(
                                                                                            "error comment reaction :>> ",
                                                                                            i
                                                                                          );
                                                                                        }
                                                                                  })(
                                                                                    e
                                                                                      .item
                                                                                      .id
                                                                                  );
                                                                                },
                                                                              children:
                                                                                (0,
                                                                                S.jsx)(
                                                                                  $.default,
                                                                                  {
                                                                                    name: "like1",
                                                                                    color:
                                                                                      e
                                                                                        .item
                                                                                        .is_liked
                                                                                        ? A.likeBlue
                                                                                        : A.white,
                                                                                    size: 20,
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          S.jsx)(
                                                                            h.default,
                                                                            {
                                                                              onPress:
                                                                                () => {
                                                                                  (async (
                                                                                    e
                                                                                  ) => {
                                                                                    E(
                                                                                      !0
                                                                                    ),
                                                                                      R(
                                                                                        e
                                                                                      );
                                                                                    const t =
                                                                                      b.find(
                                                                                        (
                                                                                          t
                                                                                        ) =>
                                                                                          t.id ==
                                                                                          e
                                                                                      );
                                                                                    y(
                                                                                      t.text
                                                                                    );
                                                                                  })(
                                                                                    e
                                                                                      .item
                                                                                      .id
                                                                                  );
                                                                                },
                                                                              children:
                                                                                (0,
                                                                                S.jsx)(
                                                                                  $.default,
                                                                                  {
                                                                                    name: "edit",
                                                                                    color:
                                                                                      A.white,
                                                                                    size: 20,
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          S.jsx)(
                                                                            h.default,
                                                                            {
                                                                              onPress:
                                                                                () => {
                                                                                  var t;
                                                                                  (t =
                                                                                    e
                                                                                      .item
                                                                                      .id),
                                                                                    window.confirm(
                                                                                      "Are you sure you want to delete this comment?"
                                                                                    ) &&
                                                                                      J(
                                                                                        t
                                                                                      );
                                                                                },
                                                                              children:
                                                                                (0,
                                                                                S.jsx)(
                                                                                  $.default,
                                                                                  {
                                                                                    name: "delete",
                                                                                    color:
                                                                                      A.white,
                                                                                    size: 20,
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                          ItemSeparatorComponent:
                                                            () =>
                                                              (0, S.jsx)(
                                                                i.default,
                                                                {
                                                                  style: [
                                                                    At.commentBorderDivider,
                                                                    {
                                                                      height: 20,
                                                                      marginBottom: 10,
                                                                    },
                                                                  ],
                                                                }
                                                              ),
                                                        })
                                                      : (0, S.jsx)(i.default, {
                                                          children: (0, S.jsx)(
                                                            c.default,
                                                            {
                                                              style: {
                                                                textAlign:
                                                                  "center",
                                                                color: A.white,
                                                              },
                                                              children:
                                                                "No comments",
                                                            }
                                                          ),
                                                        }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                        ],
                                      },
                                      n.id
                                    ),
                                }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
          },
          At = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center" },
            container: { flex: 1 },
            blurViewContainer: {
              flex: 1,
              borderRadius: 32,
              alignItems: "center",
              marginTop: 20,
              minHeight: 450,
            },
            innerContainer: {
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            },
            scrollContainerSmall: { width: "90%" },
            scrollContainer: { width: "60%", flexGrow: 0 },
            contentContainer: { width: "100%", paddingVertical: 20 },
            dataItem: {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: 10,
              marginVertical: 5,
              borderRadius: 25,
            },
            itemHeader: {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 5,
              width: "100%",
              flexWrap: "nowrap",
            },
            samallItemHeader: { flexWrap: "wrap", gap: 5 },
            userInfo: {
              color: A.white,
              fontSize: 24,
              fontFamily: "PoppinsSemi",
            },
            shareSaveContainer: { flexDirection: "row", alignItems: "center" },
            itemSubHeader: {
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              gap: 10,
            },
            commentText: {
              color: A.white,
              fontSize: 16,
              fontFamily: "PoppinsMedium",
            },
            itemDescription: {
              color: A.white,
              fontSize: 16,
              fontFamily: "PoppinsMedium",
              marginBottom: 10,
              width: "92%",
              marginRight: 20,
            },
            descriptionWrapper: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
            actionsRow: {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              paddingHorizontal: 20,
            },
            commentButton: {
              flex: 1,
              flexDirection: "row",
              marginHorizontal: 20,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              width: 120,
              maxWidth: 120,
              minWidth: 100,
              padding: 5,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            },
            smallDummyPostContainer: { width: "90%" },
            dummyPostContainer: {
              height: 33,
              alignItems: "center",
              width: "60%",
              borderRadius: 8,
              paddingHorizontal: 10,
              marginLeft: 10,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              marginVertical: 20,
              padding: 20,
              flex: 1,
            },
            dummyImage: {
              borderRadius: 25,
              marginVertical: 10,
              resizeMode: "cover",
              width: "100%",
            },
            smallSliderContainer: { width: "90%", backgroundColor: "red" },
            sliderContainer: {
              width: "60%",
              minWidth: 200,
              padding: 20,
              borderRadius: 32,
              paddingBottom: 30,
              marginTop: 20,
            },
            videoWrapper: {
              marginRight: 30,
              backgroundColor: "#fff",
              padding: 5,
              width: 150,
              borderRadius: 10,
              overflow: "hidden",
            },
            video: { width: "100%", height: 260, borderRadius: 20 },
            iconTiny: { height: 20, width: 20, resizeMode: "contain" },
            iconTinyMargin: {
              height: 20,
              width: 20,
              resizeMode: "contain",
              marginLeft: 10,
            },
            iconSmall: { height: 30, width: 30 },
            iconLarge: { height: 36, width: 36, marginRight: 10 },
            headerIcons: { flexDirection: "row", alignItems: "center" },
            likeContainer: {
              flexDirection: "row",
              gap: 8,
              flex: 1,
              justifyContent: "flex-end",
            },
            commentContainer: {
              flex: 1,
              marginTop: 10,
              gap: 10,
              borderRadius: 20,
              padding: 15,
            },
            commentInput: { flexWrap: "wrap", flexDirection: "row", gap: 10 },
            commentInputText: { flex: 3, minWidth: 200 },
            commentSubmitBtn: {
              flex: 1,
              width: 80,
              minWidth: 80,
              height: 45,
              padding: 10,
              borderRadius: 8,
              backgroundColor: A.white,
              justifyContent: "center",
              alignItems: "center",
            },
            commentBorderDivider: {
              borderBottomWidth: 0.5,
              borderRadius: 10,
              borderColor: "#5c5a5a",
              marginHorizontal: 20,
            },
            commentTitle: { color: A.white },
            flatListContent: { paddingBottom: 10 },
            commentBox: { paddingLeft: 20, gap: 5 },
            commentUser: { color: A.white, fontWeight: "700", fontSize: 18 },
            commentBoxText: { paddingLeft: 20, color: A.white, fontSize: 16 },
            alignCommentIcons: {
              flexDirection: "row",
              gap: 20,
              paddingLeft: 20,
            },
          }),
          wt = () => {
            const [e, t] = (0, d.useState)(null);
            console.log("\ud83d\ude80 ~ CommunityBgImage ~ images:", e);
            const n = (0, p.useNavigation)(),
              o = (0, p.useRoute)(),
              { community_id: r, backgroundImage: s } = o.params;
            console.log(
              "\ud83d\ude80 ~ CommunityBgImage ~ backgroundImage:",
              s
            ),
              console.log("community_id 6665565656565656:>> ", r);
            return (0, S.jsxs)(l.default, {
              style: bt.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsx)(T, { backNavigation: !0 }),
                (0, S.jsx)(B, {}),
                (0, S.jsx)(l.default, {
                  style: bt.container,
                  source:
                    null !== e
                      ? { uri: e?.uri }
                      : s
                      ? { uri: s }
                      : w.CommbackImg,
                  children: (0, S.jsxs)(i.default, {
                    style: bt.innerContainer,
                    children: [
                      (0, S.jsx)(c.default, {
                        style: bt.contentTxt,
                        children: "Change Community background Image",
                      }),
                      (0, S.jsx)(h.default, {
                        style: bt.btn,
                        onPress: () =>
                          (async () => {
                            if (
                              !1 ===
                              (await Le.requestMediaLibraryPermissionsAsync())
                                .granted
                            )
                              return void alert(
                                "Permission to access media library is required!"
                              );
                            const e = await Le.launchImageLibraryAsync({
                              mediaTypes: ["images"],
                              allowsMultipleSelection: !1,
                              quality: 1,
                              base64: !0,
                            });
                            if (!e.canceled) {
                              console.log("result===>>>", e);
                              const n = e.assets[0];
                              console.log(
                                "\ud83d\ude80 ~ handleChooseImage ~ selectedImages:",
                                n
                              ),
                                t(n);
                            }
                          })(),
                        children: (0, S.jsx)(c.default, {
                          style: bt.btnTxt,
                          children: "Select Image",
                        }),
                      }),
                      e &&
                        (0, S.jsxs)(i.default, {
                          style: {
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                          },
                          children: [
                            (0, S.jsx)(h.default, {
                              style: bt.btn,
                              onPress: () =>
                                (async () => {
                                  console.log("upload images 5555");
                                  const t = await O(),
                                    o = `${
                                      C.UPDATE_COMMUNITY_BACKGROUND_IMAGE + r
                                    }/`;
                                  try {
                                    const a = new FormData();
                                    {
                                      const t = await fetch(e.uri),
                                        n = await t.blob(),
                                        o =
                                          e.fileName ||
                                          `image-${Date.now()}.jpg`;
                                      a.append("background_image", n, o);
                                    }
                                    const i = {
                                        method: "put",
                                        url: o,
                                        headers: {
                                          Accept: "application/json",
                                          Authorization: `Bearer ${t}`,
                                          "Content-Type": "multipart/form-data",
                                        },
                                        data: a,
                                      },
                                      r = await R.default.request(i);
                                    console.log(
                                      "Api Responce Post data",
                                      r.data
                                    ),
                                      r.data &&
                                        (console.log(
                                          "Community back ground image successfully uploaded"
                                        ),
                                        n.goBack());
                                  } catch (a) {
                                    console.error(
                                      "Post Error:",
                                      a.response ? a.response.data : a.message
                                    );
                                  }
                                })(),
                              children: (0, S.jsx)(c.default, {
                                style: bt.btnTxt,
                                children: "Upload",
                              }),
                            }),
                            (0, S.jsx)(h.default, {
                              onPress: () => {
                                window.confirm(
                                  "Are you sure to remove image"
                                ) && t(null);
                              },
                              children: (0, S.jsx)($.default, {
                                name: "delete",
                                color: A.black,
                                size: 30,
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            });
          },
          bt = a.default.create({
            backGroundImg: {
              flex: 1,
              alignItems: "center",
              paddingHorizontal: 20,
            },
            container: {
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
              padding: 50,
              overflow: "hidden",
              borderRadius: 20,
            },
            innerContainer: {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: A.white,
              gap: 15,
            },
            contentTxt: { color: A.black },
            btn: {
              backgroundColor: "blue",
              padding: 10,
              borderWidth: 1,
              borderColor: A.white,
              borderRadius: 20,
              paddingHorizontal: 30,
            },
            btnTxt: { color: A.white },
          });
        var Ct = n(5991);
        const jt = (0, d.memo)(
            ({
              options: e = [],
              iconStyle: t = {},
              buttonStyle: n = {},
              modalStyle: o = {},
              optionTextStyle: a = {},
              cancelTextStyle: r = {},
              itemData: l = null,
            }) => {
              const [s, u] = (0, d.useState)(!1),
                g = (0, d.useCallback)(
                  (e) => {
                    u(!1), e?.callback?.(l);
                  },
                  [l]
                ),
                m = (0, d.useCallback)(
                  () =>
                    e.map((e, t) =>
                      (0, S.jsxs)(
                        h.default,
                        {
                          style: [St.optionButton, e.style],
                          onPress: () => g(e),
                          activeOpacity: 0.7,
                          children: [
                            e.icon &&
                              (0, S.jsx)(f.default, {
                                source: e.icon,
                                style: [St.optionIcon, e.iconStyle],
                              }),
                            (0, S.jsx)(c.default, {
                              style: [St.optionText, a, e.textStyle],
                              children: e.label,
                            }),
                          ],
                        },
                        `option-${t}`
                      )
                    ),
                  [e, a]
                );
              return (0, S.jsxs)(i.default, {
                style: St.container,
                children: [
                  (0, S.jsx)(h.default, {
                    style: [St.threeDotsButton, n],
                    activeOpacity: 0.5,
                    onPress: () => u(!0),
                    hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
                    children: (0, S.jsx)(ce.default, {
                      name: "dots-three-vertical",
                      color: A.black,
                      size: 20,
                    }),
                  }),
                  (0, S.jsx)(F.default, {
                    animationType: "fade",
                    transparent: !0,
                    visible: s,
                    onRequestClose: () => u(!1),
                    children: (0, S.jsx)(h.default, {
                      style: St.modalOverlay,
                      activeOpacity: 1,
                      onPress: () => u(!1),
                      children: (0, S.jsxs)(i.default, {
                        style: [St.modalContent, o],
                        children: [
                          m(),
                          (0, S.jsx)(h.default, {
                            style: St.cancelButton,
                            onPress: () => u(!1),
                            children: (0, S.jsx)(c.default, {
                              style: [St.cancelText, r],
                              children: "Cancel",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
            }
          ),
          St = a.default.create({
            container: { zIndex: 1 },
            threeDotsButton: { paddingVertical: 10 },
            threeDotsIcon: { width: 20, height: 4, tintColor: "black" },
            modalOverlay: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            modalContent: {
              width: Ct.default.select({ web: 250, default: "80%" }),
              backgroundColor: "white",
              borderRadius: 12,
              paddingVertical: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              gap: 10,
            },
            optionButton: {
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
            },
            optionIcon: {
              width: 20,
              height: 20,
              marginRight: 12,
              tintColor: "#333",
            },
            optionText: { fontSize: 16, color: "#333" },
            cancelButton: {
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderTopWidth: 1,
              borderTopColor: "#f0f0f0",
              marginTop: 8,
            },
            cancelText: { fontSize: 16, color: "blue", textAlign: "center" },
          }),
          It = jt,
          Tt = a.default.create({
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
            scrollableContent: { flex: 1, paddingVertical: 20 },
            scrollableContentContainer: { alignItems: "center", gap: 20 },
            header: { width: "100%", gap: 20 },
            followingBar: {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 20,
              flexDirection: "row",
              gap: 20,
              justifyContent: "flex-end",
            },
            barUserId: { paddingVertical: 5, paddingHorizontal: 10, flex: 1 },
            barBtn: { paddingVertical: 5, paddingHorizontal: 10 },
            barBtnTxt: { color: A.white },
            activeBarBtn: {
              borderBottomColor: "#1d9af5",
              borderBottomWidth: 2,
            },
            activeBarBtnTxt: { color: "#1d9af5" },
            contentContainer: {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              flex: 1,
              width: "100%",
              minHeight: 440,
              borderRadius: 20,
              padding: 10,
            },
            heading: { flexDirection: "row", padding: 10, gap: 5 },
            headingTxt: { color: A.white, fontSize: 24 },
            followCount: {
              backgroundColor: "#1d9af5",
              borderRadius: 20,
              height: 20,
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
            },
            countTxt: { color: A.white },
            followCard: {
              width: "100%",
              backgroundColor: A.white,
              maxWidth: 400,
              minWidth: 240,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            },
            imageView: { borderRadius: 50, overflow: "hidden" },
            follUserImage: { width: 30, height: 30 },
            followUserID: { flex: 1 },
            follEmail: { fontSize: 10 },
            followedBtn: {
              backgroundColor: "#1d9af5",
              borderRadius: 100,
              padding: 10,
            },
            followBtn: {
              borderColor: "#1d9af5",
              borderWidth: 1,
              borderRadius: 100,
              padding: 10,
            },
            followedBtnTxt: { color: A.white, fontSize: 12 },
            followBtnTxt: { color: "#1d9af5", fontSize: 12 },
            FollThreeDots: { paddingVertical: 10 },
          }),
          Et = () => {
            const [e, t] = (0, d.useState)(null),
              { list: n, userId: o } =
                ((0, s.default)().width, (0, p.useRoute)()?.params),
              [u, g] = (0, d.useState)(n),
              [m, x] = (0, d.useState)(0),
              [y, w] = (0, d.useState)(o.email),
              [b, j] = (0, d.useState)(null),
              [I, E] = (0, d.useState)(null),
              k = (0, p.useNavigation)();
            (0, p.useIsFocused)();
            (0, d.useEffect)(() => {
              b
                ? (E(null), R(), console.log("it is working user 1111"))
                : (console.log("it is working user2222"), B(), U());
            }, [u, m]);
            const B = async () => {
                try {
                  const e = await O(),
                    n =
                      "following" == u
                        ? C.FOLLOWING_LIST
                        : "follower" == u && C.FOLLOWER_LIST,
                    o = await P(n, e);
                  t(o.data.data);
                } catch (e) {
                  console.log("\ud83d\ude80 ~ handleGetFollowList ~ error:", e);
                }
              },
              R = async (e = b, n = y) => {
                try {
                  const o = await O(),
                    a =
                      "following" == u
                        ? `${C.USER_FOLLOWING_LIST + e}/`
                        : "follower" == u && `${C.USER_FOLLOWER_LIST + e}/`,
                    i = await P(a, o);
                  t(i.data.data), j(e), w(n);
                } catch (o) {
                  console.log("\ud83d\ude80 ~ FollowUser ~ error:", o),
                    400 === o.status &&
                      "No following found." === o.message &&
                      (t([]), j(e), w(n)),
                    403 === o.status &&
                      "You are blocked this user." === o.message &&
                      window.alert(`Blockes User\n\n${o.message}`);
                }
              },
              M = async (e, t) => {
                if (!window.confirm(`Alert\n\nAre you sure to ${t} this user`))
                  return;
                const n = await O(),
                  o = "unBlock" === t ? C.UN_BLOCK_USER : C.BLOCK_USER,
                  a = { user_id: e };
                try {
                  const e = await v(o, a, n);
                  console.log(
                    "\ud83d\ude80 ~ handleBlockUnBlockUser ~ response:",
                    e
                  ),
                    x((e) => e + 1);
                } catch (i) {
                  console.log(
                    "\ud83d\ude80 ~ handleBlockUnBlockUser ~ error:",
                    i
                  );
                }
              },
              U = async () => {
                const e = await O(),
                  n = C.USER_BLOCK_LIST;
                try {
                  const o = await P(n, e),
                    a = o?.data?.data;
                  console.log("\ud83d\ude80 ~ handleBlockList ~ res:", a);
                  const i = a.map((e) => e.blocked_user);
                  t(i),
                    E(i),
                    console.log(
                      "\ud83d\ude80 ~ handleBlockList ~ blockList:",
                      i
                    );
                } catch (o) {
                  console.log("\ud83d\ude80 ~ handleBlockList ~ error:", o);
                }
              };
            return (0, S.jsxs)(l.default, {
              style: Tt.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  keyboardShouldPersistTaps: "handled",
                  style: Tt.scrollableContent,
                  showsVerticalScrollIndicator: !1,
                  contentContainerStyle: Tt.scrollableContentContainer,
                  children: [
                    (0, S.jsxs)(i.default, {
                      style: Tt.header,
                      children: [
                        (0, S.jsx)(T, { backNavigation: !0 }),
                        (0, S.jsxs)(i.default, {
                          style: Tt.followingBar,
                          children: [
                            (0, S.jsx)(i.default, {
                              style: Tt.barUserId,
                              children: (0, S.jsx)(c.default, {
                                style: Tt.countTxt,
                                children: y,
                              }),
                            }),
                            (0, S.jsx)(h.default, {
                              style: Tt.barBtn,
                              onPress: () => k.goBack(),
                              activeOpacity: 0.5,
                              children: (0, S.jsx)(c.default, {
                                style: [Tt.barBtnTxt],
                                children: "Profile",
                              }),
                            }),
                            (0, S.jsx)(h.default, {
                              style: [
                                Tt.barBtn,
                                "following" === u && Tt.activeBarBtn,
                              ],
                              onPress: () => g("following"),
                              activeOpacity: 0.5,
                              children: (0, S.jsx)(c.default, {
                                style: [
                                  Tt.barBtnTxt,
                                  "following" === u && Tt.activeBarBtnTxt,
                                ],
                                children: "Followings",
                              }),
                            }),
                            (0, S.jsx)(h.default, {
                              style: [
                                Tt.barBtn,
                                "follower" === u && Tt.activeBarBtn,
                              ],
                              onPress: () => g("follower"),
                              activeOpacity: 0.5,
                              children: (0, S.jsx)(c.default, {
                                style: [
                                  Tt.barBtnTxt,
                                  "follower" === u && Tt.activeBarBtnTxt,
                                ],
                                children: "Followers",
                              }),
                            }),
                            !!I &&
                              (0, S.jsx)(h.default, {
                                style: [
                                  Tt.barBtn,
                                  "block" === u && Tt.activeBarBtn,
                                ],
                                onPress: () => g("block"),
                                activeOpacity: 0.5,
                                children: (0, S.jsx)(c.default, {
                                  style: [
                                    Tt.barBtnTxt,
                                    "block" === u && Tt.activeBarBtnTxt,
                                  ],
                                  children: "Block List",
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, S.jsxs)(i.default, {
                      style: Tt.contentContainer,
                      children: [
                        (0, S.jsxs)(i.default, {
                          style: Tt.heading,
                          children: [
                            (0, S.jsx)(c.default, {
                              style: Tt.headingTxt,
                              children:
                                "block" === u
                                  ? "Block List"
                                  : "following" === u
                                  ? "Following"
                                  : "Follower",
                            }),
                            e?.length > 0 &&
                              (0, S.jsx)(i.default, {
                                style: Tt.followCount,
                                children: (0, S.jsx)(c.default, {
                                  style: Tt.countTxt,
                                  children: e?.length,
                                }),
                              }),
                          ],
                        }),
                        (0, S.jsx)(i.default, {
                          style: {},
                          children: (0, S.jsx)(W.default, {
                            data: e,
                            keyExtractor: (e, t) => "followList" + t.toString(),
                            contentContainerStyle: {
                              gap: 10,
                              paddingVertical: 10,
                              paddingHorizontal: 30,
                            },
                            columnWrapperStyle: {
                              gap: 10,
                              justifyContent: "space-evenly",
                            },
                            style: { gap: 10 },
                            numColumns: 2,
                            renderItem: ({ item: e, index: t }) =>
                              (0, S.jsxs)(
                                i.default,
                                {
                                  style: Tt.followCard,
                                  children: [
                                    (0, S.jsx)(h.default, {
                                      style: Tt.imageView,
                                      activeOpacity: 0.5,
                                      onPress: () => R(e.id, e.email),
                                      disabled: "block" === u,
                                      children: (0, S.jsx)(f.default, {
                                        source: {
                                          uri: e.profile_image
                                            ? e.profile_image
                                            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
                                        },
                                        style: Tt.follUserImage,
                                        resizeMode: "cover",
                                      }),
                                    }),
                                    (0, S.jsxs)(h.default, {
                                      style: Tt.followUserID,
                                      activeOpacity: 0.5,
                                      onPress: () => R(e.id, e.email),
                                      disabled: "block" === u,
                                      children: [
                                        (0, S.jsx)(c.default, {
                                          children: e.name,
                                        }),
                                        (0, S.jsx)(c.default, {
                                          style: Tt.follEmail,
                                          children: e.email,
                                        }),
                                      ],
                                    }),
                                    (0, S.jsx)(h.default, {
                                      activeOpacity: 0.5,
                                      style:
                                        "block" === u
                                          ? Tt.followedBtn
                                          : e?.is_follow
                                          ? Tt.followBtn
                                          : Tt.followedBtn,
                                      onPress: () =>
                                        "block" === u
                                          ? M(e.id, "unBlock")
                                          : !e?.is_follow &&
                                            (async (e) => {
                                              try {
                                                const t = await O(),
                                                  n = `${
                                                    C.FOLLOW_REQIUEST + e
                                                  }/`,
                                                  o = {};
                                                console.log(
                                                  "\ud83d\ude80 ~ handleFollow ~ URL:",
                                                  n
                                                );
                                                const a = await v(n, o, t);
                                                console.log(
                                                  "\ud83d\ude80 ~ handleFollow ~ response:",
                                                  a
                                                ),
                                                  x((e) => e + 1);
                                              } catch (t) {
                                                console.log(
                                                  "\ud83d\ude80 ~ handleFollow ~ error:",
                                                  t
                                                ),
                                                  403 === t.status &&
                                                    "You are blocked this user." ==
                                                      t.message &&
                                                    window.alert(
                                                      `User Blocked\n\n${t.message}`
                                                    );
                                              }
                                            })(e.id),
                                      children: (0, S.jsx)(c.default, {
                                        style: e?.is_follow
                                          ? Tt.followBtnTxt
                                          : Tt.followedBtnTxt,
                                        children:
                                          "block" === u
                                            ? "Un Block"
                                            : e?.is_follow
                                            ? "Following"
                                            : "Follow",
                                      }),
                                    }),
                                    "block" !== u &&
                                      (0, S.jsx)(It, {
                                        itemData: e.id,
                                        options: [
                                          ...(e.is_follow
                                            ? [
                                                {
                                                  label: "UnFollow",
                                                  callback: (e) =>
                                                    (async (e) => {
                                                      console.log(
                                                        "\ud83d\ude80 ~ handleUnFollow ~ user_id:",
                                                        e
                                                      ),
                                                        console.log(
                                                          "unfollow finction :>>"
                                                        );
                                                      try {
                                                        const t = await O(),
                                                          n = C.UN_FOLLOW,
                                                          o = { user_id: e },
                                                          a = await v(n, o, t);
                                                        console.log(
                                                          "\ud83d\ude80 ~ handleUnFollow ~ response:",
                                                          a
                                                        ),
                                                          x((e) => e + 1);
                                                      } catch (t) {
                                                        console.log(
                                                          "\ud83d\ude80 ~ handleUnFollow ~ error:",
                                                          t
                                                        );
                                                      }
                                                    })(e),
                                                  iconStyle: {
                                                    tintColor: "green",
                                                  },
                                                  textStyle: { color: A.black },
                                                },
                                              ]
                                            : []),
                                          ...(e.is_block
                                            ? [
                                                {
                                                  label: "UnBlock",
                                                  callback: (e) =>
                                                    M(e, "unBlock"),
                                                  iconStyle: {
                                                    tintColor: "green",
                                                  },
                                                  textStyle: { color: "red" },
                                                },
                                              ]
                                            : [
                                                {
                                                  label: "Block",
                                                  callback: (e) =>
                                                    M(e, "block"),
                                                  iconStyle: {
                                                    tintColor: "green",
                                                  },
                                                  textStyle: { color: "red" },
                                                },
                                              ]),
                                        ],
                                        iconStyle: { tintColor: "black" },
                                        modalStyle: {
                                          backgroundColor: "#fafafa",
                                        },
                                        cancelTextStyle: { color: "gray" },
                                      }),
                                  ],
                                },
                                t
                              ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        var kt = n(2985);
        const { width: Bt } = u.default.get("window"),
          Rt = {
            labels: ["2013", "2015", "2017", "2020", "2022", "2024", "2025"],
            datasets: [
              {
                data: [20, 60, 90, 80, 220, 510, 810],
                color: () => "rgba(66, 135, 245, 0.6)",
              },
            ],
          },
          Ot = ({ title: e, description: t }) =>
            (0, S.jsxs)(i.default, {
              style: Pt.infoBox,
              children: [
                (0, S.jsx)(c.default, { style: Pt.boxTitle, children: e }),
                (0, S.jsx)(c.default, { style: Pt.boxText, children: t }),
              ],
            }),
          vt = {
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#f5f5f5",
            backgroundGradientTo: "#e8f0fe",
            decimalPlaces: 2,
            color: (e = 1) => `rgba(0, 0, 0, ${e})`,
            labelColor: () => "#333",
            propsForDots: { r: "4", strokeWidth: "2", stroke: "#4c8bf5" },
          },
          Pt = a.default.create({
            container: { padding: 20, alignItems: "center" },
            header: {
              fontSize: 20,
              fontWeight: "bold",
              color: A.white,
              fontFamily: "PoppinsSemi",
            },
            amount: {
              fontSize: 18,
              marginVertical: 10,
              color: A.white,
              fontFamily: "PoppinsSemi",
            },
            change: { color: "green" },
            chartStyle: { marginVertical: 8, borderRadius: 16 },
            filtersRow: { flexDirection: "row", gap: 8, marginTop: 10 },
            filterButton: {
              backgroundColor: "#e0e0e0",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 8,
            },
            filterText: { fontSize: 12, color: "#000" },
            tipText: {
              marginVertical: 10,
              fontSize: 12,
              textAlign: "center",
              color: "#555",
            },
            exchangeChart: {
              marginBottom: 10,
              padding: 8,
              backgroundColor: "#f1f1f1",
              borderRadius: 6,
              marginTop: 20,
            },
            boxContainer: {
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 10,
            },
            infoBox: {
              width: "48%",
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 10,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
            },
            boxTitle: { fontWeight: "bold", marginBottom: 4 },
            boxText: { fontSize: 12, color: "#333" },
            backGroundImg: { flex: 1, paddingHorizontal: 20 },
          }),
          Mt = () =>
            (0, S.jsxs)(l.default, {
              style: Pt.backGroundImg,
              children: [
                (0, S.jsx)(D.LinearGradient, {
                  colors: ["#130f4b", "#130f4b", "#523398", "#6333a8"],
                  start: { x: 0, y: 0 },
                  end: { x: 1, y: 1 },
                  style: a.default.absoluteFill,
                }),
                (0, S.jsxs)(r.default, {
                  contentContainerStyle: Pt.container,
                  children: [
                    (0, S.jsx)(c.default, {
                      style: Pt.header,
                      children: "Money Earned",
                    }),
                    (0, S.jsxs)(c.default, {
                      style: Pt.amount,
                      children: [
                        "$509.96 ",
                        (0, S.jsx)(c.default, {
                          style: Pt.change,
                          children: "+0.46 (+0.09%)",
                        }),
                      ],
                    }),
                    (0, S.jsx)(kt.LineChart, {
                      data: Rt,
                      width: Bt - 40,
                      height: 220,
                      yAxisLabel: "$",
                      chartConfig: vt,
                      bezier: !0,
                      style: Pt.chartStyle,
                    }),
                    (0, S.jsx)(i.default, {
                      style: Pt.filtersRow,
                      children: ["YTD", "1D", "1W", "1M", "1Y"].map((e) =>
                        (0, S.jsx)(
                          g.default,
                          {
                            style: Pt.filterButton,
                            children: (0, S.jsx)(c.default, {
                              style: Pt.filterText,
                              children: e,
                            }),
                          },
                          e
                        )
                      ),
                    }),
                    (0, S.jsx)(g.default, {
                      style: Pt.exchangeChart,
                      children: (0, S.jsx)(c.default, {
                        children: "Click to exchange the chart",
                      }),
                    }),
                    (0, S.jsxs)(i.default, {
                      style: Pt.boxContainer,
                      children: [
                        (0, S.jsx)(Ot, {
                          title: "Community",
                          description: "- Number of followers,\\n9657",
                        }),
                        (0, S.jsx)(Ot, {
                          title: "Interactions",
                          description:
                            "- Number of people followed, message,\\nlike, comment and tag sent...",
                        }),
                        (0, S.jsx)(Ot, {
                          title: "Attractivity",
                          description:
                            "- Number of visitors\\n- How many times someone click on a content...",
                        }),
                        (0, S.jsx)(Ot, {
                          title: "Creator",
                          description:
                            "- Number of contents per day, week, month\\n- Kind of content\\n- Time spends by people on the content",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          Ut = (0, le.default)(),
          Dt =
            ((0, nt.default)(),
            () =>
              (0, S.jsxs)(Ut.Navigator, {
                screenOptions: { headerShown: !1 },
                children: [
                  (0, S.jsx)(Ut.Screen, { name: "Login", component: xe }),
                  (0, S.jsx)(Ut.Screen, { name: "Register", component: Oe }),
                  (0, S.jsx)(Ut.Screen, { name: "Otp", component: Pe }),
                  (0, S.jsx)(Ut.Screen, { name: "Forgot", component: Fe }),
                  (0, S.jsx)(Ut.Screen, {
                    name: "Restpassword",
                    component: Ne,
                  }),
                  (0, S.jsx)(Ut.Screen, { name: "MainStack", component: Nt }),
                ],
              })),
          Nt = () =>
            (0, S.jsxs)(Ut.Navigator, {
              screenOptions: { headerShown: !1 },
              initialRouteName: "ProfileScreen",
              children: [
                (0, S.jsx)(Ut.Screen, { name: "ProfileScreen", component: zt }),
                (0, S.jsx)(Ut.Screen, { name: "NewsScreen", component: Wt }),
                (0, S.jsx)(Ut.Screen, {
                  name: "ExchangeScreen",
                  component: Ft,
                }),
                (0, S.jsx)(Ut.Screen, { name: "AuthStack", component: Dt }),
              ],
            }),
          zt = () =>
            (0, S.jsxs)(Ut.Navigator, {
              screenOptions: { headerShown: !1 },
              children: [
                (0, S.jsx)(Ut.Screen, { name: "Profile", component: N }),
                (0, S.jsx)(Ut.Screen, { name: "EditProfile", component: Ve }),
                (0, S.jsx)(Ut.Screen, { name: "FollowUser", component: Et }),
                (0, S.jsx)(Ut.Screen, { name: "User", component: Te }),
                (0, S.jsx)(Ut.Screen, {
                  name: "ChartAnalytics",
                  component: Mt,
                }),
              ],
            }),
          Wt = () =>
            (0, S.jsxs)(Ut.Navigator, {
              screenOptions: { headerShown: !1 },
              children: [
                (0, S.jsx)(Ut.Screen, { name: "News", component: ne }),
                (0, S.jsx)(Ut.Screen, { name: "PublishPost", component: Ze }),
              ],
            }),
          Ft = () =>
            (0, S.jsxs)(Ut.Navigator, {
              screenOptions: { headerShown: !1 },
              children: [
                (0, S.jsx)(Ut.Screen, { name: "Exchange", component: ae }),
                (0, S.jsx)(Ut.Screen, { name: "Communities", component: tt }),
                (0, S.jsx)(Ut.Screen, {
                  name: "CommunityBgImage",
                  component: wt,
                }),
                (0, S.jsx)(Ut.Screen, { name: "OneToOne", component: at }),
                (0, S.jsx)(Ut.Screen, {
                  name: "CommunityDetail",
                  component: st,
                }),
                (0, S.jsx)(Ut.Screen, {
                  name: "CreateCommunity",
                  component: ct,
                }),
                (0, S.jsx)(Ut.Screen, {
                  name: "FollowedCommunity",
                  component: ft,
                }),
                (0, S.jsx)(Ut.Screen, {
                  name: "MyQuesAndAnswer",
                  component: pt,
                }),
                (0, S.jsx)(Ut.Screen, { name: "PublishPost", component: Ze }),
                (0, S.jsx)(Ut.Screen, {
                  name: "CommunityPostList",
                  component: yt,
                }),
              ],
            }),
          _t = ({ initialRoute: e }) => {
            const [t, n] = (0, d.useState)(""),
              [o, a] = (0, d.useState)(null);
            return (
              (0, d.useEffect)(() => {
                (async () => {
                  const e = await j.default.getItem("access_token");
                  a(!!e);
                })();
              }, []),
              null === o
                ? null
                : (0, S.jsx)(re.default, {
                    children: o ? (0, S.jsx)(Nt, {}) : (0, S.jsx)(Dt, {}),
                  })
            );
          };
        function Lt() {
          return (
            (0, d.useEffect)(() => {
              !(async function () {
                await y.loadAsync({
                  [y.PoppinsRegular]: n(9123),
                  [y.PoppinsMedium]: n(5924),
                  [y.Playfair]: n(3171),
                  [y.PoppinsSemi]: n(4477),
                  [y.PoppinsLight]: n(734),
                });
              })();
            }, []),
            (0, S.jsx)(o.default, {
              style: { flex: 1 },
              children: (0, S.jsx)(_t, {}),
            })
          );
        }
        a.default.create({
          container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          },
        });
      },
      708: (e, t, n) => {
        e.exports = n.p + "static/media/tip.f1c0c6d96543db6cc3b6.png";
      },
      734: (e, t, n) => {
        e.exports = n.p + "static/media/Poppins-Light.3fda0a0ef72be930b308.ttf";
      },
      954: (e, t, n) => {
        e.exports = n.p + "static/media/share.ac40d98afc0e891f3b36.png";
      },
      1031: (e, t, n) => {
        e.exports = n.p + "static/media/sort.a9a98489e7d01976a0b4.png";
      },
      1060: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgBvVOBEYMgDKReB3AER3GTukHdQFfoBI7iCHQD3CSFM9zlYgKUav+OU5JPnoRgDAEAPP1ysMP6NRgBpTweNICMsYYnCVgl0NXwIm4kEDTxm8e3vIiG/G9K3JvtS3kHgZccd7CX8o7AC4w9dtrFlfL+C3+K3q8FT+SIXZx5/23RbjGuSyWf2MjFJMmZD19mn6TkUpIOfcmZxyo4ei6wcgbxqUhwVi4goUWfU/wW/R3uZ9irCWvgAlISrccR9I5+G1EofxvB58xViKVxe5MJom8DsJLFnHSiSem/1iKxAi259sACchNG4bQWPcyVyJxqTsWUCriMyBhbVSVQA03gbs7DJhk/8J5BbI90UEgAAAAASUVORK5CYII=";
      },
      1099: (e, t, n) => {
        e.exports = n.p + "static/media/Grid.344b135961a08ccf3bba.png";
      },
      1103: (e, t, n) => {
        e.exports = n.p + "static/media/editing.11564642d19d1c52cd77.png";
      },
      1220: (e, t, n) => {
        e.exports = n.p + "static/media/follow.4139fc5afd9d4e82e060.png";
      },
      1426: (e, t, n) => {
        e.exports = n.p + "static/media/commback.989788902ae9e6d4c02c.png";
      },
      1577: (e, t, n) => {
        e.exports = n.p + "static/media/pdf.e918705e9723d063a195.png";
      },
      2100: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7ZuBUdswFIZ/cwwQJqg7AWQCnAlaJiidoGECYALoBLAB7QRRN0gmiDaATvB4z5JywufYjkmMJfHd/cnZcc7+T9KTrCdlOBBENOGvgpWzTllnrIk99tFWL6wVS7GWWZa9YOyISdY1a0HvZ8Gas3KMDX6ogvZjssl8gY9mAKNV1qzvGBq+aT6w0SoPNFRV5xv9Yj3Tx7NmXeJQkAlIdzQ+7nbxkXW5iEwXs4DpWsbIknXBXZluu7DVMJm2ImZzjBvNmrWZbjQckFmHZk2bBi1HaOYJ4ZgVctbCNsFathq2wWCsbbYJeebrnf7BZi8pfOZ13rIasznCarfbkHY8rQaxuiot1SFH+Eg7fqiefFPCZMapT4gL6aqUO6gaXiOO0vVRbHjmDjZVmszrV474KMh7tfTb8G6hPCw23soqbSPzGnFzIiMwV8LDv1QPT9kvO8PfED/n8pGRGXc+Iw1OpIRDHC/3pRDDBdLhTAyfIh2+iOEJ0qEs4RzpMJEoTUiItime6Pg0HDtiWCMdtBgef+J5f5SGV0iH/2J4iXRYptaGVXqvhzbxpBA/yp/i+Yf4+SsfbhIvhWr9VdIuZQknUK2VyzH5Q8tbxMvGWwpjae3nlnzDBeLkyj/wDZ8jPh65dP/4JzbZQ47UEqVjmt/SqFnVU5awzS3FNpl3W7eEyVXp2Cbjf7PZx7ofYjQsi8vn2350hmMJWJp10XSBG1rGELA0Oiw9PGKzbi9CyMgkxrTL4tIYMg8SoKZdN4WEnD0Ug1dNAaqOY4SZPVSsn12qcJXQEuIKJjDN+pgVjtEP9/4sMyXaHsvSoAKHQcGMnBTeC0fpm5ZVqbKhY8G6l6WJ1LCbhMxulzntb6PWDTWsfe6D64fv+euHPSchfmW/Vd+qYx9UmksBEyfcNry8cqmGqSHuvtre9yAZkVd2BtC5K5PQNgAAAABJRU5ErkJggg==";
      },
      2187: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABICAYAAACqT5alAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7ZuBddowEEDPmYAR3AnKBnUmaDaADdoNQiZomIBmgiYTQCYonQBvABtc79AZiGPJsi0ZWfi/p5DIkqwf25IsiQR6AhEz+vhOgT8nEp1T2FJ4S5JkAzFAoimFNdbDaVIYMiQwpbBHezjtFIYIVXzWUPaSGQwJke3KMKQdyQ5Dmir4A93zCCHCFaup+L7lsfCkLWWnhuM2rXkY0raykrYSORa+tIXsDi/6VV2ii+Op5AlP2lI2LeUxCkua8KTphL+woazkqxWWdOFI04lW2EJW8loJS1ob6RX4pIus5LcWlvTXk+4qK2U0EpY8/Utj/TP7Fy1e7doISz4b6QW4As39I8tOLMtpJSx5J3IuHXtwhUHYWlbKaS0s+U3SToUXFSdYN5GVcjoJSxk66WdwCReI6kpzWEALXAh3rU8CPaKTowm83upxB45Bh10E+h5YdEGerZXpFm16S8th99JUaIbnqdS9VLxJ6/uhITGkayOMaNnPl+rziOfeZY1qXvwkW8XulMhc+AOWBgWGtG2Fi/rMob4+GeoHKVnC9qBWA3RsKLyBWiE4SFxK4RuFOZxXEU7oGiGdXMP0OYVXCu/yO9dpKnUqVjZ0bBLTf7gtnoU74byVDp1ROHZG4dgZhWNnFI6dUTh2RuHYGYVjZxSOnVE4dkZhzxws47zhRdgwab6siHvRlOFlG7GvK5xVRdJs7AKU9EHCE8X91JThRdjLvDTwhHeS3EMHqFp/6OMBHONLmLlv+z0GeSR24AGfjdYKG+4QYCTPGjzhUzilsMaGq5CgZFPwhO9uiRse2y1NGacFT41Vgc9nuAyv+B1XIenZ5pXI4lnNKMzAvOrnjD6Fg4Bv6V5HOlfmwMI53A5bFn6H2+EfC7/C7XDc8sB9H49qGg8SBkZOvcOXO/rBjdYS4uf4VnbcTHIDVzkHNbbPjyMtucpPEC/8GprzL6ehJUXw9tsYb+0luf0u/vi0P4pubz44gzh4Idn5ZcSnlwdJEMOVXpZljfC+Rqz/YkWI8IZS3bSReYM4qreZOahbPIWwKbrXZ2mEK7HeiU7yPL+UUfgK6p312l0YS+WghsY8WtyaRAv+A7rPGbRhw3swAAAAAElFTkSuQmCC";
      },
      2313: (e, t, n) => {
        e.exports = n.p + "static/media/banner.dc4723b12dfd81fbe1d9.png";
      },
      2346: (e, t, n) => {
        e.exports = n.p + "static/media/insta.45ecfffd60bfc4f49250.png";
      },
      2862: (e, t, n) => {
        e.exports = n.p + "static/media/excel-icon.eeab8d9eabce9340ad38.png";
      },
      2942: (e, t, n) => {
        e.exports = n.p + "static/media/laughIc.07ebf436f2f846c12859.webp";
      },
      3024: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANkSURBVHgB7ZyPdZswEMY/8jpAsgGdoM4EpRPEnaDOBI0ncDtBs4HtCTqCnQnSDewN7A3UuyK3roP+ADpAMr/37iXPCIE+7g4JJICOUEoVZD/Jdqo5B13HDKlAjZmQbVR4dmQ5YkaLc1BycN0TCJJBCH11X8luIcuR7D7Lsj0EuIEcG8iLA32MJYQQEYi8Z0p/cnQH3wAKCCDlQQ+Wbd/J7rKa8D5kc0u9XxALdDVfDUn1CS2hOr4Z6t5BAJEkzWdr2MSec0S7ujnnHKq2aU8LimSSTgIpgfaG31uHGMy55hdigcLg2dK5e9JhUrfOW7KFpV6RW33rmNU9Wb5rFWT8fxd9Hxuc49ibXshWUh1IJ9xTVjJjrNAsVddjNjrgVyU7xgoNn2uI/OclzkLFywKSqNJzYqeWJ3knadXd6FyaWqP/Ov0gds/YxWG4DT98C3t5kPYekbFOj3gNe3w9aIr0mPkU8hXoAelR+BTyDTEePaeQf845UojduQo5PUjnn9TEYW6VRw/bJ8RypIvzjYiPQAXSJXcV8BHoA9KlcBXwEUj0xVzPOC++9S6mLM9/E8LaYXR5UMrec8LaxlGglgJ9RPpY85BLoBzpU9g2GpP0lSToE8ZEbfOga8g/J3LThlGgksK0wSZQyj3oS4xtHT2oxNhWW5I2zdBIEtPMkEoPUsITI4eIqc2mELs6gWBo8yjQPyrb/M5QOIU7GHf81ihnerAdTy8L9aNWtok2HlJVtrkyMUX+kH5FtiYxtjX2+ZODaJ83k7CyqoIoXzHHxpbsMfR8oKoclCMuOJTmJMwniclSVTmoQDzsyT5XhUYoqgSKJUHvyUS85pyqHBRLgr739RzTqMBnXvXNRUVDmITpw1wyrM65TNI5hs+WxHlGR1wKFEMP+hEdcinQ0B/Sdz7vObYQW6Nj/mbxCB7S78l73qMBoe5iQ88/W/TAuUAFhs0LekBs1XNXSD8aHhfUORgFcjAK5GAUyMEoUN+oco1qCGZoiKlCn3278KAVwtDLOFFcID3vJsQYKsUFNSWqXNIdYo1rgQaYKsOQoPOZqvZs0ABTZRgayvxhkjrkqImpIgwROq+ZahZuvE+BBkQlEKPKjxKslD9L1eBzFmfHi0ugE1oo7idt1P9etdO/NfrOR8VxGgv0G7GaboO1/aCXAAAAAElFTkSuQmCC";
      },
      3171: (e, t, n) => {
        e.exports =
          n.p +
          "static/media/PlayfairDisplay-SemiBold.998e0c55848f5a03cdeb.ttf";
      },
      3246: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgBtZaBEYIwDEUD5wC6QVdxMt0AN4ANkAk4N3CDugFsEFMsGCMttbXvLorN9/8DaQSAQERF1VMN+E1r+uCB+if7XVOVbCqHMWdwhdB6vaKvuaDFMHqPuWY6/RGC4QzCvGKGiukUspDCvEIgBcECtD080vJj9jEafF3O6YxTAvZ2bbSfkWuWfmyARAbMlFQjZMQE3AO1HcSAifuA+aDzctuQ1mHcb5lvBvwDV0AJmSltetKw85L9R8aEYRcS8MtOHmmTHnwBk6HYydlHxQ4iQTHsnP3YM8DAcZ0y7G5UyhjxO4yZm/cO7P0fwlUm0Fpje5rp5uNmScS0P/1mRd9IUdKwo/4F348tZ957Ar2rD/jFL1mIAAAAAElFTkSuQmCC";
      },
      3446: (e, t, n) => {
        e.exports =
          n.p + "static/media/devicon_facebook.6144b5552b8ae6fef7e8.png";
      },
      3690: (e, t, n) => {
        e.exports = n.p + "static/media/video-icon.7d18e9f8e2da48b1210d.jpg";
      },
      3873: (e, t, n) => {
        e.exports = n.p + "static/media/filltern.9ea8b0ee84601a7d6260.png";
      },
      3882: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBvZWBkYIwEEX3rIASKOVKuA7ODrSDYAdaAWMFlkAJ2EHsADv4LrroEpNMYhjfzM4QsuxfSD4hUgDYcFg86DnWtBRjMfjZ0hJIxz4sFfCjBBBMYuhDVur6Esg5UwFa4BDICd3PRxZ6Wgu72AJ/Be72l6PlGOQNBhnXgfyKw+DlGyvjypdsEMd4ioe2dT8TQdhgLn8ZDTVawCINm/HMM3dFn1EXzsf5xhsck+elm6wfGjJ30R01nnaVSRBpMPdBA9cHeBmrcgRG/qkULtJJsRbiWukkKoKH8zvMnX+CewqORVWSj4HeP02HOC2cdahF3Yd1BHqk0cU+m1GJa3U/9bcy0fiK6yJbZ84ijyFmtB0fxXsq43oDHk5cOY3l7mQAAAAASUVORK5CYII=";
      },
      4319: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKWSURBVHgB7ZmBcdswDEUhT6ARtEG8QZUJmg3qEbJBs4G9QdsJkk4gZ4KmE0gbKBv8AiXd+hyBpGmSkXN6dzhdSBnUD0VQACuKAEDNlzu2G7aWTf5ujm4ZrL2wPcu1qqqB5giLadk6xPEov6e5cKGYU3q2Nb0XPHjNtkUexG9NJeEBG/tfzUkv41AJCgkqJ+wMQSPbjm1jf1Mf+Viz3bF9D/TVZxMGs4Z8DyFi7nHGerDCfX575Fhj8AeFXezAMLO58/jfUkpgXhkXD5QA8eMZp6VUwP16PFBCPMI6SgHM5qqxowzA/Sq2dCkwnzBT9MgUlWCC0ogcswWzgDU2lBGYKKoRHwlh9pPJWaLMeGZrQ5GsyKQOU+wpM5yOvPLlh9Id/dErom6Uvp9Uhhel/RNFIqIapW+gMuyV9ug1VcnLO9nBUAFsQBgp4TO8uygh9TOsHAOVTeASIqIGpa+IKOip/UCRiKhXpa+lMjRK+0CRiKhnpa9UceSz0v6bIhFR2j7xpdC6apX2PcViP1U07ikjMBmxRkOXAL2mN+aaLbhrIU90KXDnU2lT7P9jukoHLaUA7grsV0qI+HOMlS478MxWMmEeQULaqIuAag8iFzDCStjpSwcIq/tJ/+ZMn5LhjgF+82whCK/Qyj3fYDLn9YkI8SHhehsg5kCWgBQjLBc9chR8Cgn7BX0d97mE1fAHj1j+lbAd9/TIeHCwRrpZ63CyuXru75HzqAdmL3tEHB2ULwWERdyGAolKl+0AEvFaMtWoht6ezkue9vdknu3JlsNc/jrSc6uDz9vZnvJPgbDAdNaMzYJF2CJsJizCFmEzYRHG963oSrBfErdU7oipHI4Zu77X75gJYdct6MCRsI8h6IAV1py2/wGJmwmBEYJ59QAAAABJRU5ErkJggg==";
      },
      4367: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgB7ZyBcdowFIafmIBMULpBOkHdCZoNkk5QMkGTCcoGeIQyAXQC2AB3ArLB63uxoBcq6ymHQmT8f3fvnLMlTv7OenYsyY4iMPNYNt8lKomJj0vgSWIjsZD45Zxrugq60E4RM5HNnFoxQ6CWeAyJGh3vEDm3slnTcOQodxJrOffp8YEXgqTAD2ptjml46Dn/9A4OHLqYHNBcMyOg3Et3e3bxLMjnHO1WQ7xyQmgS/6Q5ad/F9LKCnH+oC71JkfNXz5ZAiCu9gm4IdDFVQV8JdPFZu9iOkH+6aFQQE+hkRCAKBBlAkAEEGUCQAQQZQJABBBlAkAEEGUCQAQQZQJABBBlAkEFOQSuJLxJXMhrg/N+bwuvacB7qyO/XhdZNIoegLbcjI10NHUvsCqubTI4utorOjnBOB+EWhdVNJoegPwllmsLqJpND0IcTyrxX3XT4dLSfjyO/P+E2X5RUN5lcd7F5pKHzQusmkUuQohOQKt84vYNUEsvC65pg4NAA/2oYQJABBBlAkAEEGUCQAQQZQJABBBlAkAEEGUCQgQpqCHTxBEFxNiroN4EuFvo+SF9b7giE+DjywyMrAsfUOqyEBXVhXi6o8wNw9wT2HFZAH56DZEetBwg87terBpHuNuUMY9o9RM/5v2XhsQ8LPEjc0jBYSXwLjfW7WC0vSpds6qrEa7qcJN740GfAmb+Tnw8RO+Pzs+bIdJjikMY+8Pno5wcRpOE3/PYJf0p9hjPNsgig4iu6BN5A0pb7lG9S4HbmRY7kveTIvKDew6cl72F8nYbbp/XX0u9k/FrkhK85LS9pmYqGCNvJW49NaOiIhDtun4T3LLnNVXg/VTp/AaAuALhkkT3lAAAAAElFTkSuQmCC";
      },
      4403: (e, t, n) => {
        e.exports = n.p + "static/media/Commpp.d97f20fea9d894850e8f.png";
      },
      4477: (e, t, n) => {
        e.exports =
          n.p + "static/media/Poppins-SemiBold.e67a02ce2ffd90b0d253.ttf";
      },
      4615: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgBpVWBVYNADM31dQDc4DawTiAbiBNQJ+gIsoE6QXUCu4FsIJ0ANoANzkR+bIoHWPzv5YUL4d+/XO5wNIMQwoadmEeoYauccxVdCiZL2B7Z2jCOmm3H5mMcLkKasttDYcd2YDtCaQf1YndsCeIPvIKSJpTmRlEhyidyPXIU+VhiioQWqv8E2YNwKlkam73Gyw1dCCOqPlslNup7+bQQpiyFDdZYjqeFQCcJR0uDZezpn2COVy3nik6NfxwqiChKpnIYemjOiCvzwRO7n+4AwaeYkrHPkHMwxA28X5mgnd1HYkN0AzIbo7WdRYN8iu5FGfsO447HN/oMX3LsSseAtmojxFqCa5NAgw9+jUdiytFzapuEiSM8Bxwy4ahlrDV+ob6eGS1HDo43O9sW/belBcB9oUfak1G8GGjJDwzl+mzkYT3Iu+VEfZaNqTQxQijL3rEVhrTU9w5JUtv3yPf2opedFjJP/e5nNHHRO6NAExVCkJPp78iksunP0VakGYSFP9MvoNVzZHnGi0gAAAAASUVORK5CYII=";
      },
      4616: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgBnVMN0cIwDO1Q8H0OkDAJ4GA4AAUMBauD4WA4AAfFAaBghwJwEF5GyuVCOw7e3dvapHnNz+bcCIioBE/CqfsFCGzoHfWnW/dgB/4pO4l9JgzgTfmnEhOGbPHo1Y1bdXAIlHcLViaBTsX1zqQezI07JWj9QQdOXB4t2BdFMQf/sT6As9zhMaEr6OONWFcilgaNTAX7pfSQWZth1DpQC3VyYC31V7LnqZayrug5ybXsdymhOGaNRmXQGF8pwm/N5rTPpnKvxC7gXfnuuR4F1ReLVnyx+UvZd6nSXqVkxLgM/rbqVKkuERDFgrH7kX5RKoAyNp8TAU5xvDf6DG96GsGx5QSfP09q4X7HijWG8WNxZIP7HhvEDr/NA5ddpoSadZY+AAAAAElFTkSuQmCC";
      },
      4785: (e, t, n) => {
        e.exports = n.p + "static/media/word-icon.e84371124cce82b7a3a6.png";
      },
      4898: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA/CAYAAAC1gwumAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKoSURBVHgB7ZvtcdNAEIZfM/lPqACVECpA6cBUgKkAU0HiCoAKbCpIOrDpwKnARwURFSy7WJrRKPo4nVbKrZJnZh3NSRrdq73d+1KAV3QhopRtT2ce2bZsV5gDLGRJzdzAOiziRO2ksApXPqFu9lDmDaYj9bhGPRanFPjR45pL8TQUic2DwiUUmURg3g0knpfbE4h+sZXBGqWO3QdVD46OZ/dQ8AhlpmiiaY9rj1BmCoF9hmAPUGZUgdzkVvDPnoKDFfLYO1E/UliB+mXOAhsZlCt6Q/1Rz6CjEChOUJ9JCBdQhCv5nf+sEYZ6BhVUBOaxs2VbIhyHERgskM7TmzsMn8upd/KDobCuoIlRMuhFpcISP/Kg3WKxcG030rnPuoPy9GY0JEGU3qYs5121XLskfUKTUyuLUqWpcm7DXryt3kDnmJOUnkCfHdsvDMc9aYE1b3RbdyeXr8gGW7YkJItaWYVesaVts4kE9klCBDoYok1gU/o3tSj0ogUWXUIVB0N0LVnUeXE+HkSNwK4hXGx0CUways14MaSJCrMX6GCDrEvg+4byP7DBsUvgO9jGhXrQwQYPc4/BY6hAK3QLpPrFIIf4yXhQkvnsLlkV+H8ZMlSghY7+t/z4CEyqBeJ6xM9BfkI9KDjEi6yqHeQgyIM5MXtxUxzM0YMOefMUfAS+bSj/izjZlOesc2uiEnu7csEQgQ5xIS/8ulo45DOS2Dz4pW45ZS5N9BuLu6874eXByJcPxXM/mk4O2cJ+bg86tk8srnXr2zcGk2pB3t6fS+RPtg9d4oRggaUHTcmB7ZqFrX3Hw4O+spAd4Dw+P2M8RIjs+t4X48s+lAU6BGRMfqjs+B748CuGb45muUnTkw+DDiGiauFKrhu2gk+YCyzmtiJuT8r/xzA1/wCGWur+KtXXIgAAAABJRU5ErkJggg==";
      },
      5104: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZWBcYMwDEXlXAdoN4ANGIFu0BHYoNkANmg3aDMJ2cQjOBsoEoiLz8GygLw7x774oy9bYAMIiNhSG9EOazuwQMIe99OXgnd4nFYzGPE4o2agMVB7l3ZWdCFJuLMYnFeSGXLilXhTbVw8mfDhnLvRtJ+EztW8EhqGNTHNu8Ug+vvzBHl4WyrqK9hPX6oB87+oafy9YYuYYDGoSsEVA9RqsFBL7zVRpgZgMTCRMzgZnq3hsYrNWAwsXPmHkm/Sibfys/reCxfpnwwsb1GJQeLwd+PTyb0GAeczp40S/VkTaga/OB8NKpL5Xy4ISDYxHrXz/RG4wvmiCkqSk0EjQVk4xFnT+AsPUkp0ufFG3Am8AjTcE68w4Zr4JL7lG9psxKsJ0po7M9hcKPui9R4AAAAASUVORK5CYII=";
      },
      5204: (e, t, n) => {
        e.exports = n.p + "static/media/Exchange.3bf7106cff6cc15f0bf6.png";
      },
      5303: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgBrZaBccIwDEXlXAegG3iDdgR3A7oBTAIbABMAEzACrMAE8QZmAyERBXzGjgL43ekSTPSl+5YhACNBxAVFkFhBTVgQn1lCLaTrlAA1ICGHZaZavomEJnSZUfB1J8tbCqdoeIo/CivP8ueTMcbHXVqKNrUA36dlzbjAFuuzZu1Galioz09c4Kw87KHz+Zu85X37lzUtpwPzexD7OUmzeU3JsWlCqUhxFDE/wiFuyCQJmIqIJaUCLBSGchpQyNkTCV1AoUmEcgm/UC6es8+/4n+dTUb9oLV9tyLssCzecztoX1LDwjD8/SEzA0O8dNDewd/vlD0YQ8hYalk7/rnmBQedHSfp4Ai6ffzsXO5n0E3ibswI94WnA507qAF+8JepnmRhk1nbQ014rvHx2rIcm3cFbUrlHg/1wVEAAAAASUVORK5CYII=";
      },
      5543: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAYAAABVsFofAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANbSURBVHgB7ZxNTttAFIDfGweKusoRvCuUVoITkHTXVVN+JIIqkS67gu4rcLhA4QSETUhFG/kGhBNAJSS6dHftLmuK53XGTiJB7McCJwLnfVLE4Jl45C/z58RvAIRUEDJk3au4SM4hEi3EZ0df41S95bUCGAGjrk9BhqBWp0BUIoBi9CKqob4+rXiVIoyAUdeXmZzql5WK+eMmZLnPQ1WBjBlHfZnJQdVr2omZiRfx6OvLtFvlDZHDIHIY2Kn8g7daCkm/A8ISArl2RoAcYC66S4ABIHUQnaOmd3KRUm6Y/vrBTpMwCZj1EeHU57vrI+duuWp9ZVNp9E1yFiaHWaSw9vrNyz+Xnauf/YO35FgxEFLDJGdg8pgBgooRFPQFDbqV7UpKq/O8jCsPoEtqetF2scFspcj5KmIiikj/Dm0iajlr3tpCQYfnIAxwlCoXbKKgb2r8rE4HpJ7tc3e7GzvLnml5u0l55sz15l7bgwx5SH0bpjGQvtk2JTfTyoQ6rBTik6klMqNRYkWIjWa9vQ05oreuqVV33nfNFW4llUFUS/GYg+SmngnDA8gppGg/NY/IVXEifSBuev4F5JSW5wdMdjG7eyuCIDVLYfaCx1BfZnKmHe2bwSsYyjDHjr0fPmTMOOrLTE7D87uEumw+tyNE6NqXGdU6hNNlGAHjqK8AGdLrwzUYE6OuT77PYRA5DCKHQeQwiBwGkcMQ3YpXd5YJhCGk5TCIHAaRwyByGEQOg8hhuPeu/HivnemjcY8NbhkjLYdB5DCIHAaRwyByGEQOg8hhEDkMIodB5DCIHAaRwyByGEQOg8hhEDkMIodB5DCIHAaRwyByGEQOg8hhEDkMkZzoGd4U1r11F3KKDaVisrtxyyEM0ko4dL0FOWWKwtRrQ8Qg+jmYQJ+ZfxMtaoLtjd2VIqA6SAsxfmrY3oDmQydKf8CbSJ9hXHi1hFqfgjAAlV6MulXL+96xcQMgxCD6NpRqMFsRhh+5gXlSsA5sAL5ND+LKLzu/uvPlub9IkPleN08JUvCp5Z10bPpW0P1l5+riVXnut2lOJZiwwPuoxURi2o3+saHtGqyg+fKLbwjKhUnZsiGO03rbbzGDw9x7eiHGNRspC3YXFMrJLijR2IqBna5JOX40ISXwH0wlRvG47yw5AAAAAElFTkSuQmCC";
      },
      5552: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABICAYAAAC9bQZsAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgB7ZuPddowEMYPXgdIN3AmaDJB6QRlA8gEhQkgE0AnIJ2g3QCYIM4E9gawwdc7JKcp4Y8snYitx++9wzywZH3IlnSng0gZAD22BVuB8zzbc/vUVLhxGdsS/hRSBzUJbtAd2wbhSB131ARgekpD1FtxGX00cHuW6rKkj4Qb0Ec8ehRAx+UkvsgNH+Te/87WY8vYbugybNlya+tOp/OHQhFBbBPoPkOhFDBtysgHLjhAswTtU7AN62gSUTO0h5mrqAXaxyKlntpndkzUEO1nUOnpWFEZH2RSzKjdyNRwy1PCtms/EKUZtR+ZW0fypuqxgtIQJux6rQvjC2WUDrtVktyKPUqPvgj7QunxtcO34oYut6C9FFsRBkqQLiXKVVjbiC2sZBuTWebs4Pf3bA/2u3ggHnOHa08RiVjCpuQIIomLIWxBNeEyv6FMjHlMnqeyTgEYt6kgRbQHj1VdUYItsyJFtIW9kD8hZd+hLWxL/oSUfYe2sJDFtOpCXFtYiAuk6j5dR8UauEVm/2dC2iAOzg2F2WBQJ+Za8aw4RIw8x/agS7ZHtpyfu9yKyfggkbEfFDE6dg0NtI1khX2iOMjyaMW2tsdSNgrkC/zbz87I7GnHycqBLrK1O7WNd72+7HPLFlYBRTSFzVFD0BGRat60hrACgTkZe+LuoNB7ocIKREgPgkljKhBAyDwmg8G9j8fsgv3BnsnTnQkZ7sfnROFw7qLkKErwZniqrK37gXyBHws6L6hwqEfO6Z2pyyuC5SssO9GQCeozOVFfBg98hC2URVWMTtS7RE18hPU1f9k3HE3AhLm1a+EzeKyOfB7qBcvod+xuyKkmPsP952rdVwGz4thQOK8JKKH1+/TYoWdhQDq8JqAE1w8/RjCL1ypRU5vg+pP2oFVDyw1hlyRWUnrkImxN6fEiwsLTvZvHSgYPGWIlbp5K2pHEV267djL8SenwS16qRMxUeq1k+ya+3G7lYXttTO3n8aDzCxNpaiunE2b4hCe0jydyAe3quTnVARGis8qIYzokH2C8YonOFmgOTmF0pz/GWZESEuiR2d2XTYVL/jGuJLP0k1VSvu+IHuIvg/lL5xWKuRMAAAAASUVORK5CYII=";
      },
      5883: (e, t, n) => {
        e.exports = n.p + "static/media/link.82e96eacad06f6cb4fb6.png";
      },
      5924: (e, t, n) => {
        e.exports =
          n.p + "static/media/poppins.medium.b59f6a636397975c5409.ttf";
      },
      5945: (e, t, n) => {
        e.exports = n.p + "static/media/link-icon.976b59becb66eba12d62.png";
      },
      6007: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB1ZXRcYMwDIZFJmAERsgIjNBM0GSCeoMyQjagG2QEZwO6gbMB2UC1DtH8CMPhBx7y3XFnJMu/JGNDtBFm/opPr8835RKDyvh4HrjJO/g+eE69JRYFzmYBB74mIdBsiT2AhlV9wvhOc343xk7KvGkG3papVYx74HJi9ycqfmpmiIfsfGIP/jcTsh8JsiYKhMQCV/WdeRmnc64JXy++cZOrRGHPFd9IaeamfG9OIc2iHTnQzojAg/bjIQJ45C+FEscnsN8LA02vjxPYLygg37Czh0uI48p+0whPD2YFdj85JzycVKSGyWHBXoM9LCT1EubpUQ/8ugKahepasLdqK01CLRllLLnTgKPJ6MiJLHVuB7aeoW2jiDOBQYM9VmGz56FdwcQ6SsHpP1fHy4SEraE1tJKe85n9iNZEpDU/GYt7tj3PEHK6QG9aIzZp6eq1/AePnpwNPvIPmAAAAABJRU5ErkJggg==";
      },
      6035: (e, t, n) => {
        e.exports = n.p + "static/media/hidep.a81cfb08e8b44aba3209.png";
      },
      6357: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgB7doxSgNBFAbg/40o2siSWMQouN4gdnaaI3gCw2php3Z26gnEzkI0nsAjqCdQb7CNmEJBsBDUzPPtxkAQm5UkmDfvg4HJTDH52ezsZGcIf1AtJfsg7GR1Jtd8fDrdxRD0Y9wxFDRbSo5k0D2pTnYKL09PLdHr2+01Bqhf4zoURITGzzYmbGPA+jVu4cAMRL80Rxiwfo1bOPCos8DaWWDtqPfD/Mzmqmdel+m+BuZIOiMewgw8AKlES+X7S+Gbh+ezZrcjD1ypbMX0+XEpIWvQKeXxiXqrdZLmP2n6eL9SHDbTuaCC5spJwwPnCICsv+uOQSsIhGO/7mSCihEIJqo5uXdjhEKePNmkFSMcUWgLj+AC21pavfACy2L6BQFxnnCMAGQXlhmHMMYY849RdUZ25Bg7I/qyrhBiHNBsOWGE48X+HmpngbWzwNpZYO0ssHYWWDsLrJ0F1s4Ca2eBtQtv95DDCpw6IgooMKUO7O8RCAKnsiE+1kQgPHCTHx+uljZumVSfps2kj89ni/ljyfv2GvJD1UoR3XHb1/Nqb3ulnDTkpl5lcgvfZzBjjJj8LIeUfDJm3Hmii9bT6XW3/wtdoYq7b/HPTwAAAABJRU5ErkJggg==";
      },
      6415: (e, t, n) => {
        e.exports = n.p + "static/media/close.b87f0cf4d770d165986a.png";
      },
      6526: (e, t, n) => {
        e.exports = n.p + "static/media/airiplane.690e5066fe758a9842d7.png";
      },
      6599: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAECAYAAACDQW/RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8SURBVHgBrY/BCQAwCANDJ+lojtJNHSWNlLYf/XkQBUOEgOSUVmwk6G6hwvtZDefBiycXS/yXHeiiq9oGGI1abTC5SiEAAAAASUVORK5CYII=";
      },
      6822: (e, t, n) => {
        e.exports = n.p + "static/media/dislike.4c9153e0e3b0b842c58c.png";
      },
      6859: (e, t, n) => {
        e.exports =
          n.p + "static/media/logos_youtube-icon.2371018317a9eca52147.png";
      },
      6952: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4SURBVHgBlZGLCYAwDERPcICO0E1cwRE6QkdxA0cRJxAn6AiOEM8PgphicnCBNjnyShsRSQA6+DS3LIFO8Gk9K7dOYtfyxHmI9GYIHTPxtZsX2RDMKvgP8lh9MZtBdOTyQVTCvRJMsIiDgwmxglxuB3gk1xfFWn8HRUMAqFQJw2MAAAAASUVORK5CYII=";
      },
      6999: (e, t, n) => {
        e.exports = n.p + "static/media/Exchange1.ed9e0baa4db557144742.png";
      },
      7003: (e, t, n) => {
        e.exports = n.p + "static/media/fbic.55f1c192ff3c0bccf682.png";
      },
      7019: (e, t, n) => {
        e.exports = n.p + "static/media/audio-icon.77bf1735a44b3658da36.png";
      },
      7169: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgB7ZVhCoAgDIVnJ6ibdfO6gd0gb7BmiWgO+tGTsPpABJ1708lG9FqY2fqBstMO7ty166gyUUCCGMN1s4j4AsVu8r4KpbCBIubEpBEQECNkT1SLVMARDqSvh0mTvMrUEwYnOR7OAu3/ol/gAwIL4ZiLFT76AaJkW9b6QbNsfsALjUh2wTkAAAAASUVORK5CYII=";
      },
      7276: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFCSURBVHgBrVQLccMwDFV7AxAILoNAGYMaQhnURdAwyBgMwgZhDFIGHQPNusnNq2Inbtp3p4sj6cn6JUQVYGYf5YtHyNnTs4hBGhPYQmwNrUUknyHYEMWpDKA/0xpoIEQAWzC2x6vQvnNFBYJDKc7bzB0u8z4UfIsVbKmMXzifNgaiA/uFHoVuUEKbseOMHK1BJHbQf6+XNnpOc+hoLTSYHejd4JdibBfsMjyn5299ymx+kr26PdpT+bCu0JaUfZ/xx/Yhp59cGhV7cMrhkLnAz/hLrD1mjsGD6oMhOFNtHUdLusFkiehAX8/h6ZYc1fHI07KDSjVnYzN4NWRN0y/hEmVnfgc7Gn8D8jyp1HN4XLfPXAbQ7x509Ry+3wgxtOrUguPcFi1z+H+nS9+B6N8zWS5xvCVIVh88bshVW+GogBrOH76xdHWlGCmYAAAAAElFTkSuQmCC";
      },
      7333: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADQSURBVHgB5ZPRDYIwFEUfxgEYoSMwAm7gBjICG+EGugE6gSN0BN3gekn60dS2FHn86EleIOFyT1qKyF8AoOV0sgUsPsEh2vjl6oKwXFXAriMiiAbsaThPxJnEjXzLTLmP5Qwcs0V5yMCptyr3V2RyAov12Jhk5653WY/hjEhtFx88oMMlJagVJW1KYqDzPUZJkZMEuenkdUiv2iyWZPI9Po95LzkQ+TcK8taLX2WOULIwb6UEt89FApdv/fx+7oWqqs7MvnhbSwHM35g/yM/wBhN+IfyLfcvjAAAAAElFTkSuQmCC";
      },
      7478: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgBtZaxTsMwEIbP3WBokZjYwhPQLqyYgZnwBI14CFbECAKpI+IpGkaWwhOkb+DCytAWCTEed3UiWQjB+Zx80i9HSs5/fT3bZ0AAIloaTkk8ZqSd+tWKNK9VGmOeIQUyKkgO5fC3BcRCQRmpQj2O55CajUlLTIfnyP8zy7F9xn+lsY2V/YTnzBofExg68BXYBXOq4BE/9GqzokMzZohh9WJE6a9Xn6jENWZWGvH2+o6Howu8vZ6iEsspzaV5GQy2YdDfgrubR1IJCnJe4SzmJ3JKT44ucW/3XLPSig2jt0KC6RJQSWj6cP8kjutBCvUu/lh/yWNQm1LbpLSMCd2kNOpWSDBjZmw4kX6daMZMlBtfZcbY5n900ojUo62p0itpkfXptFGy8Qivp4qGIXTDgq6nfX4I9+EZ+C6sbXjO41/foO/S2kbU17TVRBUgAX1/41APHyYZxIIdNMJGaGzBX9QH4Cs5bPUXpBfSVNLqfwN5Fedg7C5N5wAAAABJRU5ErkJggg==";
      },
      7579: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABHSURBVHgB5ZJBCgAgCAS36Aeduvm2Pp4/qYSuK+QtGtjTIIoKEFrtw8J8AUcch4wgDxWmsznBHRruSNmTTAvzP5zD+1V1HBYVLgl9/NoD1QAAAABJRU5ErkJggg==";
      },
      7903: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA0CAYAAAAqunDVAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKKSURBVHgB7ZpPbtpAFId/M5hdpOJlJBbmBIVl1SziE0S5SThBmxPQG+QIbU/gNmnVJdwApCJlaVToqvZM/RyCwLacZPwMjOJPQpixPXqf5/8YoMEOBPZAOP/Zbwn1gY5j6Qzd03cz1EjtUuE06Mh2ewxob520UP+intvzF6gJiZpxHKe/JUR0kKbVR+1Sh6CRsoVGyhYaKVtopGyhkbKFRsoWGilbaKRsoZGyBQcVCKfjjuOs+lF0MnF7A5aNFI48jUsqvP/lyfZqqgQC2f47pm0wVITy4MjTWKqlohFoZyhFexIqqCKWCiV57OSp448wgLNNdUzF8kLVMJaKtbxOvrJ1/sViJUIL5cRXMMBYyu2+nyhIHxXESoUQ+e6pP4MBlbedywOTvqNVhxr+9gml4UPIRalQ15/AkMpt6qkSEy28zd0kdL8uoTR7MMHQ2FmECNa3HhXE2IQI9lc5BmKsQkQt76deIMYuRGykVusu+CRp+GDgGWKsQtvxp73fcn47iqHG9FnOf4zAQEmvSLAKZeMX6yc63r4oCWbg1ldirEJF8UsaHHNXFqUZkpZYKxoIgS/04W5DRfFXWk89l/V05xJ74hUt57Vmq36HQEZONMslSunBEpQQudWAXNf3nW5XQF/AEgpiXciHE9jpjTRwHv6+O8eRQwMuxbqTqPX3VCrWuM7eIIW4oc0VHCkUWwz9OZuuaOh4/PFnfhfkrCFmCuKSayDmYpnUoqQt3WT+HgSK9033rLeRKhqZN5cC3zT0V6nFweR00iNrCU9AXOQf/gPJIN+jPmJnlh7Ob68kBMvcb98kNWrods8+0XFu6WGj2LYQUbieCu8DT8btIF9njwtqFjGiYXYu+R8u4WpYZzg1egAAAABJRU5ErkJggg==";
      },
      7922: (e) => {
        e.exports =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAuCAYAAACcYs/JAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMUSURBVHgB7ZqBdZswEIbPnsAjMAIblEwQb2Bv0GwQZwKnE9idoM0EuBPYG8gbJBv81SHRtA7CiDupJC/fewp5Mhzi504SOhF90jCjjABY2ENhS+mriotTzra8+HKazWYvlImkQtgHr8g99Bdb+P8FxdEIYssTOWEO9F7gh7dla8sz9DG27LzA04Nd3pY7W2rkw9iypqlgG3OPNG//fQgCFwIG08EgpyBwYfAD02VnS0EpwfS8IISxpaQUWMNfIYf7khquYy3h5hWtffa0yv+m5XH3pAlchyiBBdjgrwcfcM/CX2MgQ0cMuJiT8IgIAQKC7CFjRxIURLgjJeBCJr8YkIfDmpRhm5ARFyYKIqh5QkfbpJ4xrG1wvbmEqy4INzrs8G9HePR1ywHXP0JGde0GBWS9tEHPZMbbrxXs8FArmdYb9HXgkHeOmx7bZWTj+dyyx94GMrYhw0vIKSjsCWPe4HOPTalXMFWXYQMZPyn89gzGU/fYrSHDtLbm3uCa3i6bxXIINHYptM0daxX47YlkFP7ZnRAWjWnoKVB/S3JWgfoDyWmefa7kDUxICI2vwCpQfyY5jVfM7J8jKTTWLqx2LgRzIJICie0fODSyLZlPmIqF+E4KIDxBOZOcU+Q9o+3PrcftSSnWAvW/SE7K/qex344aDySnCtTvSU5omNQS4jUqIJ9QpZr4mB67Gkt69aXRCjJ4ursINDjFFLuADo39NjTI5xW/0XhYhM5vfWv7bA83FDdC8bk3/touViTnodM+3IeMwXiCXuHtD/3Mr3H9c36InT5Mr0SQh8iWrgD3pbuHW4z50zAMTPBCvlxgMCQJhFzLYSOAPL9iEJMJg3zhQyOGL9u0ggyDMelAyPMJmsv5eT2B9MXYSRoA14FvIeMIjcQw5GFi4FIERcQ9F9DZeyHKtKUQo4Vng9wZV3ibBC7xuvNGKgBfv6YU+IYaTJ8aGfZIaCRlU2EwIEGkLcga0/GO6G0HH02Q/y/AJZkFOU5OgEvgRoN9AlH47fNQWFECcm1BvvXHmDfYbj/mpb5D6u3HvwHf+kfvmp4YHwAAAABJRU5ErkJggg==";
      },
      7993: (e, t, n) => {
        e.exports = n.p + "static/media/txt-icon.1c1c5c0ba7394c8fcb35.png";
      },
      8149: (e, t, n) => {
        e.exports = n.p + "static/media/ppt-icon.7860a097e07cfd9654c7.png";
      },
      8416: (e, t, n) => {
        e.exports = n.p + "static/media/star.c47a7a303603d96a487f.png";
      },
      8559: (e, t, n) => {
        e.exports = n.p + "static/media/heart.2ab9ce311c8d97e002ca.png";
      },
      9123: (e, t, n) => {
        e.exports =
          n.p + "static/media/poppins.regular.1c701c9a6b587802e3d0.ttf";
      },
      9231: (e, t, n) => {
        e.exports =
          n.p + "static/media/followingCommunity.cc533b190a9fa361f31b.png";
      },
    },
    t = {};
  function n(o) {
    var a = t[o];
    if (void 0 !== a) return a.exports;
    var i = (t[o] = { id: o, loaded: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.m = e),
    (() => {
      var e = [];
      n.O = (t, o, a, i) => {
        if (!o) {
          var r = 1 / 0;
          for (c = 0; c < e.length; c++) {
            for (var [o, a, i] = e[c], l = !0, s = 0; s < o.length; s++)
              (!1 & i || r >= i) && Object.keys(n.O).every((e) => n.O[e](o[s]))
                ? o.splice(s--, 1)
                : ((l = !1), i < r && (r = i));
            if (l) {
              e.splice(c--, 1);
              var d = a();
              void 0 !== d && (t = d);
            }
          }
          return t;
        }
        i = i || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
        e[c] = [o, a, i];
      };
    })(),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (n.p = ""),
    (() => {
      var e = { 792: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var a,
            i,
            [r, l, s] = o,
            d = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) var c = s(n);
          }
          for (t && t(o); d < r.length; d++)
            (i = r[d]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(c);
        },
        o = (self.webpackChunkweb = self.webpackChunkweb || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var o = n.O(void 0, [132], () => n(2394));
  o = n.O(o);
})();
//# sourceMappingURL=main.419badd8.js.map
