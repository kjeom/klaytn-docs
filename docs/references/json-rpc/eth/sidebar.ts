import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "references/json-rpc/eth/web-3-rpc",
    },
    {
      type: "category",
      label: "eth",
      items: [
        {
          type: "doc",
          id: "references/json-rpc/eth/block-number",
          label: "[Block] eth_blockNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-block-by-hash",
          label: "[Block] eth_getBlockByHash",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-block-by-number",
          label: "[Block] eth_getBlockByNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-block-transaction-count-by-hash",
          label: "[Block] eth_getBlockTransactionCountByHash",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-block-transaction-count-by-number",
          label: "[Block] eth_getBlockTransactionCountByNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-header-by-hash",
          label: "[Block] eth_getHeaderByHash",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-header-by-number",
          label: "[Block] eth_getHeaderByNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-storage-at",
          label: "[Block] eth_getStorageAt",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-uncle-by-block-hash-and-index",
          label: "[Block] eth_getUncleByBlockHashAndIndex",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-uncle-by-block-number-and-index",
          label: "[Block] eth_getUncleByBlockNumberAndIndex",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-uncle-count-by-block-hash",
          label: "[Block] eth_getUncleCountByBlockHash",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-uncle-count-by-block-number",
          label: "[Block] eth_getUncleCountByBlockNumber",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/mining",
          label: "[Block] eth_mining",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/syncing",
          label: "[Block] eth_syncing",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-block-receipts",
          label: "[Block] eth_getBlockReceipts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/call",
          label: "[Transaction] eth_call",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/create-access-list",
          label: "[Transaction] eth_createAccessList",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/estimate-gas",
          label: "[Transaction] eth_estimateGas",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/fill-transaction",
          label: "[Transaction] eth_fillTransaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-raw-transaction-by-block-hash-and-index",
          label: "[Transaction] eth_getRawTransactionByBlockHashAndIndex",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-raw-transaction-by-block-number-and-index",
          label: "[Transaction] eth_getRawTransactionByBlockNumberAndIndex",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-raw-transaction-by-hash",
          label: "[Transaction] eth_getRawTransactionByHash",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-transaction-by-block-hash-and-index",
          label: "[Transaction] eth_getTransactionByBlockHashAndIndex",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-transaction-by-block-number-and-index",
          label: "[Transaction] eth_getTransactionByBlockNumberAndIndex",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-transaction-by-hash",
          label: "[Transaction] eth_getTransactionByHash",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-transaction-receipt",
          label: "[Transaction] eth_getTransactionReceipt",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/pending-transactions",
          label: "[Transaction] eth_pendingTransactions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/resend",
          label: "[Transaction] eth_resend",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/send-raw-transaction",
          label: "[Transaction] eth_sendRawTransaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/send-transaction",
          label: "[Transaction] eth_sendTransaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/sign-transaction",
          label: "[Transaction] eth_signTransaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/chain-id",
          label: "[Configuration] eth_chainId",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/coinbase",
          label: "[Configuration] eth_coinbase",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/etherbase",
          label: "[Configuration] eth_etherbase",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/gas-price",
          label: "[Configuration] eth_gasPrice",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/protocol-version",
          label: "[Configuration] eth_protocolVersion",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/fee-history",
          label: "[Gas] eth_feeHistory",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/max-priority-fee-per-gas",
          label: "[Gas] eth_maxPriorityFeePerGas",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-filter-changes",
          label: "[Filter] eth_getFilterChanges",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-filter-logs",
          label: "[Filter] eth_getFilterLogs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-logs",
          label: "[Filter] eth_getLogs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/new-block-filter",
          label: "[Filter] eth_newBlockFilter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/new-filter",
          label: "[Filter] eth_newFilter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/new-pending-transaction-filter",
          label: "[Filter] eth_newPendingTransactionFilter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/subscribe",
          label: "[Filter] eth_subscribe",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/uninstall-filter",
          label: "[Filter] eth_uninstallFilter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/unsubscribe",
          label: "[Filter] eth_unsubscribe",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-proof",
          label: "[Others] eth_getProof",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-hashrate",
          label: "[Miscellaneous] eth_getHashrate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/get-work",
          label: "[Miscellaneous] eth_getWork",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/hashrate",
          label: "[Miscellaneous] eth_hashrate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/submit-hashrate",
          label: "[Miscellaneous] eth_submitHashrate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "references/json-rpc/eth/submit-work",
          label: "[Miscellaneous] eth_submitWork",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
