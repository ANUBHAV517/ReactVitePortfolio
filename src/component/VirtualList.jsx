// import React from 'react';
// import { FixedSizeList as List } from 'react-window';

// const VirtualList = ({ items }) => {
//   // ✅ FIX 1: Ensure items is always valid array
//   const safeItems = React.useMemo(() => {
//     if (!Array.isArray(items) || items.length === 0) {
//       return ['No items available'];
//     }
//     return items;
//   }, [items]);

//   const Row = React.useCallback(
//     ({ index, style }) => {
//       // ✅ FIX 2: Guard against undefined item
//       const item = safeItems[index];

//       return (
//         <div
//           style={{
//             ...style,
//             padding: '12px 16px',
//             borderBottom: '1px solid #e0e0e0',
//             backgroundColor: index % 2 === 0 ? '#fafafa' : '#ffffff',
//             fontSize: '14px',
//             display: 'flex',
//             alignItems: 'center',
//           }}
//         >
//           {item ? String(item) : `Item ${index}`}{' '}
//           {/* ✅ FIX 3: Safe rendering */}
//         </div>
//       );
//     },
//     [safeItems]
//   );

//   return (
//     <div
//       style={{
//         height: '500px',
//         width: '100%',
//         maxWidth: '500px',
//         border: '1px solid #ddd',
//       }}
//     >
//       <List
//         height={500}
//         itemCount={safeItems.length} // ✅ FIX 4: Use safe count
//         itemSize={50} // ✅ Consistent item height
//         width="100%"
//         itemData={safeItems} // ✅ Explicit itemData
//       >
//         {Row}
//       </List>
//     </div>
//   );
// };

// // ✅ FIX 5: Default props for parent component
// VirtualList.defaultProps = {
//   items: [],
// };

// export default VirtualList;
import React from 'react';
import { List } from 'react-virtualized';

function VirtualList({ items }) {
  return (
    <List
      width={600}
      height={300}
      rowHeight={40}
      rowCount={items.length}
      rowRenderer={({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    />
  );
}

export default VirtualList;
