import { Box, Text, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

export function Pagination ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const sinblingsCount = 1

  function generatePagesArray (from: number, to: number) {
    return [...new Array(to - from)]
    .map(( _, index ) => from + index + 1)
    .filter(page => page > 0)
  }

  const previousPages = currentPage > sinblingsCount
    ? generatePagesArray(currentPage - 1 - sinblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + sinblingsCount, lastPage))
    : []

  return (
    <HStack
      direction={['column', 'row']}
      spacing='6'
      mt='8'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>

      <HStack spacing='2'>

        {/* FIRST PAGE */}
        {currentPage > (1 + sinblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + sinblingsCount) &&
              <Text color='gray.300' width='6' textAlign='center'>...</Text>
            }
          </>
        )}

        {/* PREVIOUS PAGE */}
        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        {/* CURRENT PAGE */}
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
      
        {/* NEXT PAGE */}
        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}
      
        {/* LAST PAGE */}
        {currentPage < (lastPage - sinblingsCount) && (
          <>
            {(currentPage + sinblingsCount + 1 ) < lastPage && 
              <Text color='gray.300' width='6' textAlign='center'>...</Text>
            }
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
        
      </HStack>
    </HStack>
  )
}