# -*- coding: utf-8 -*-
# ===================================================
# ==================== META DATA ===================
# ==================================================
__author__ = "Daxeel Soni"
__url__ = "https://daxeel.github.io"
__email__ = "daxeelsoni44@gmail.com"
__license__ = "MIT"
__version__ = "0.1"
__maintainer__ = "Daxeel Soni"

# ==================================================
# ================= IMPORT MODULES =================
# ==================================================
import hashlib
import datetime
import json
from colorama import Fore, Back, Style
import time
import sys
import functools
import json

# ==================================================
# ================ TRNSACTION CLASS ================
# ==================================================
class Transaction:
    def __init__(self, data, index=0):
        self.index = index
        self.amount = data['amount']
        self.timestamp = str(datetime.datetime.now())
        self.senderAddress = data['sender']
        self.receiverAddress = data['receiver']
        self.hash = self.calculateHash()

    def calculateHash(self):
        """
            Method to calculate hash from metadata
        """
        hashData = str(self.index) + str(self.amount) + self.timestamp + self.senderAddress + self.receiverAddress
        return hashlib.sha256(hashData).hexdigest()


# ==================================================
# =================== BLOCK CLASS ==================
# ==================================================
class Block:
    """
        Create a new block in chain with metadata
    """
    def __init__(self, index=0):
        self.index = index
        self.previousHash = ""
        self.timestamp = str(datetime.datetime.now())
        self.nonce = 0
        self.merkleRoot = ""
        self.ledger = list()
        self.hash = self.calculateHash()

    def calculateHash(self):
        """
            Method to calculate hash from metadata
        """
        hashData = self.toJSON()
        return hashlib.sha256(hashData).hexdigest()

    def toJSON(self):
        """
            Make a JSON Serialization of Block
        """
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=False, indent=4)

    def computeMerkleRoot(self):
        merkleList = map(lambda transaction: transaction.hash, self.ledger)
        for i in range(0,3):
          for j in range(0, int(8/(pow(2, i))), 2):
            hashData = merkleList[j] + merkleList[j+1]
            merkleList[j] = hashlib.sha256(hashData).hexdigest()
        return merkleList[0]

    def mineBlock(self, difficulty):
        """
            Method for Proof of Work
        """
        print Back.RED + "\n[Status] Mining block (" + str(self.index) + ") with PoW ..."
        startTime = time.time()

        while self.hash[:difficulty] != "0"*difficulty:
            self.nonce += 1
            self.hash = self.calculateHash()

        self.merkleRoot = self.computeMerkleRoot()

        endTime = time.time()
        print Back.BLUE + "[ Info ] Time Elapsed : " + str(endTime - startTime) + " seconds."
        print Back.BLUE + "[ Info ] Mined Hash : " + self.hash
        print Style.RESET_ALL

# ==================================================
# ================ BLOCKCHAIN CLASS ================
# ==================================================
class Blockchain:
    """
        Initialize blockchain
    """
    def __init__(self):
        self.chain = [self.createGenesisBlock()]
        self.difficulty = 3
        self.currentBlock = self.createNewBlock()

    def createGenesisBlock(self):
        return Block()

    def addTransaction(self, data) :
        transaction = Transaction(data, len(self.currentBlock.ledger))
        if not self.checkDoubleSpending(transaction):
            raise Exception('You Are Doing Double Spending, Cheater!!')
        self.currentBlock.ledger.append(transaction)
        if len(self.currentBlock.ledger) == 8:
            self.currentBlock.mineBlock(self.difficulty)
            self.chain.append(self.currentBlock)
            self.currentBlock = self.createNewBlock()
            self.writeBlocks()

    def createNewBlock(self):
        newBlock = Block(len(self.chain))
        newBlock.previousHash = self.chain[-1].hash
        return newBlock

    def checkDoubleSpending(self, newTransaction):
        sender = newTransaction.senderAddress
        # Farzam Always has money
        if sender == "Farzam":
            return True
        senderLedger = []
        for block in self.chain:
            for transaction in block.ledger:
                if transaction.senderAddress == sender :
                    senderLedger.append(-1 * int(transaction.amount))
                if transaction.receiverAddress == sender:
                    senderLedger.append(int(transaction.amount))
        for transaction in self.currentBlock.ledger:
            if transaction.senderAddress == sender :
                senderLedger.append(-1 * int(transaction.amount))
            if transaction.receiverAddress == sender:
                senderLedger.append(int(transaction.amount))
        if len(senderLedger) == 0 :
            senderNet = 0
        else :
            senderNet = functools.reduce(lambda x,y: x+y, senderLedger)
        # raise Exception(SenderNet, sender)
        if senderNet < int(newTransaction.amount) :
            return False
        else:
            return True

    def toJSON(self):
        """
            Make a JSON Serialization of Block
        """
        return json.dumps(self.chain, default=lambda o: o.__dict__, sort_keys=False, indent=5)

    def writeBlocks(self):
        """
            Method to write new mined block to blockchain
        """
        dataFile = file("chain.txt", "w")
        dataFile.write(self.toJSON())
        dataFile.close()
