import { Client } from "ldapts";

const c = new Client({
  url: "ldaps://ldap.ug.kth.se",
});

export async function getKthId(ladokUid: string) {
  await c.bind("", "");

  const searchResults = await c.search("OU=UG,DC=ug,DC=kth,DC=se", {
    // In UG there are two attributes that apparently return the same info: "ugLadok3StudentUid" and "kthLadok3StudentUid"
    filter: `(ugLadok3StudentUid=${ladokUid})`,
    scope: "sub",
    attributes: ["ugKthid"],
    paged: {
      pageSize: 1,
    },
  });

  return searchResults.searchEntries[0]?.ugKthid;
}
