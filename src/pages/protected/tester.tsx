import { api } from "../../utils/api";
import { useState } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/router";

export default function Content() {
  const { data } = api.example.getSecretMessage.useQuery();
  const { data: items, refetch: refetchItems } = api.first.getAll.useQuery();
  const { data: privateItems, refetch: refetchPrivateItems } =
    api.first.getAllPrivate.useQuery();

  const [inputValue, setInputValue] = useState("");
  const [inputPrivateValue, setInputPrivateValue] = useState("");

  const user = useUser();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const createExample = api.first.create.useMutation({
    onSuccess: () => {
      setInputValue("");
      void refetchItems();
    },
  });

  const createPrivateExample = api.first.createPrivate.useMutation({
    onSuccess: () => {
      setInputPrivateValue("");
      void refetchPrivateItems();
    },
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createExample.mutate({ firstEntry: inputValue });
  };

  const handleChangePrivate = (e) => {
    setInputPrivateValue(e.target.value);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      router.push("/signin").catch((err) => {
        console.error("Failed to navigate", err);
      });
    }
  };

  const handlePrivateSubmit = (e) => {
    e.preventDefault();
    if (!!user) {
      createPrivateExample.mutate({
        firstEntry: inputPrivateValue,
        user_id: user.id,
      });
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-3">
      <div className="space-y-2">
        <h1 className="text-3xl"> Example </h1>
        <h1>user: {user?.id}</h1>
        <h1>{data}</h1>
        <Button onClick={signOut}>Sign Out</Button>
      </div>

      <div className="space-y-1">
        <h1 className="text-xl">Input Box</h1>
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <Input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter a string"
            className="flex-grow"
          />
          <Button type="submit">Submit</Button>
        </form>

        <h1 className="text-xl">Private Input Box</h1>
        <form onSubmit={handlePrivateSubmit} className="flex space-x-4">
          <Input
            type="text"
            value={inputPrivateValue}
            onChange={handleChangePrivate}
            placeholder="Enter a private string"
            className="flex-grow"
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        {items && (
          <Table>
            <TableCaption>Items:</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>First Entry</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.firstEntry}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {privateItems && (
          <Table>
            <TableCaption>Private Items:</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>First Entry</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {privateItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.firstEntry}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
