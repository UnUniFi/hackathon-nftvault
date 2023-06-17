import { Client, registry, MissingWalletError } from 'nftvault-client-ts'

import { AllowedChannel } from "nftvault-client-ts/nftvault.nftvault/types"
import { NftvaultPacketData } from "nftvault-client-ts/nftvault.nftvault/types"
import { NoData } from "nftvault-client-ts/nftvault.nftvault/types"
import { RequestTransferPacketData } from "nftvault-client-ts/nftvault.nftvault/types"
import { RequestTransferPacketAck } from "nftvault-client-ts/nftvault.nftvault/types"
import { CosmosTx } from "nftvault-client-ts/nftvault.nftvault/types"
import { Params } from "nftvault-client-ts/nftvault.nftvault/types"


export { AllowedChannel, NftvaultPacketData, NoData, RequestTransferPacketData, RequestTransferPacketAck, CosmosTx, Params };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				AllowedChannel: {},
				AllowedChannelAll: {},
				
				_Structure: {
						AllowedChannel: getStructure(AllowedChannel.fromPartial({})),
						NftvaultPacketData: getStructure(NftvaultPacketData.fromPartial({})),
						NoData: getStructure(NoData.fromPartial({})),
						RequestTransferPacketData: getStructure(RequestTransferPacketData.fromPartial({})),
						RequestTransferPacketAck: getStructure(RequestTransferPacketAck.fromPartial({})),
						CosmosTx: getStructure(CosmosTx.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getAllowedChannel: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AllowedChannel[JSON.stringify(params)] ?? {}
		},
				getAllowedChannelAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AllowedChannelAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: nftvault.nftvault initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.NftvaultNftvault.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAllowedChannel({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.NftvaultNftvault.query.queryAllowedChannel( key.channelId)).data
				
					
				commit('QUERY', { query: 'AllowedChannel', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllowedChannel', payload: { options: { all }, params: {...key},query }})
				return getters['getAllowedChannel']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllowedChannel API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAllowedChannelAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.NftvaultNftvault.query.queryAllowedChannelAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.NftvaultNftvault.query.queryAllowedChannelAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'AllowedChannelAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllowedChannelAll', payload: { options: { all }, params: {...key},query }})
				return getters['getAllowedChannelAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllowedChannelAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgLocalExecution({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.NftvaultNftvault.tx.sendMsgLocalExecution({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLocalExecution:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgLocalExecution:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendRequestTransfer({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.NftvaultNftvault.tx.sendMsgSendRequestTransfer({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendRequestTransfer:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendRequestTransfer:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgLocalExecution({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.NftvaultNftvault.tx.msgLocalExecution({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLocalExecution:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgLocalExecution:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendRequestTransfer({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.NftvaultNftvault.tx.msgSendRequestTransfer({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendRequestTransfer:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendRequestTransfer:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
