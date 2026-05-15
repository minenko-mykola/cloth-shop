import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Button, Input, InputGroup } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
    const [search, setSearch] = React.useState<string>('');
    const router = useRouter();

    const handleSearch = () => {
        if (search.trim()) {
            router.push(`/results?q=${encodeURIComponent(search.trim())}`);
        }
    };

    return (
        <InputGroup
            width="320px"
            startElement={<FaSearch />}
            pr="15px"
            endElement={<Button onClick={handleSearch}>Search</Button>}
        >
            <Input
                variant="subtle"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
        </InputGroup>
    );
};