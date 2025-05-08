import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from '@solana/web3.js';
import { CreatorProfile } from "../target/types/creator_profile";

describe("creator_profile", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);


  const program = anchor.workspace.CreatorProfile as Program<CreatorProfile>;

  it("Creates profile", async () => {
    const [profilePDA] = await PublicKey.findProgramAddress(
      [Buffer.from("profile"), provider.wallet.publicKey.toBuffer()],
      program.programId
    );
    console.log("PROFILE PDA:", profilePDA.toString());

    await program.methods.createProfile(
      "test_userName",
      "Test Name",
      "Test bio",
      ["tag_example1", "tag_example2"]
    ).accounts({
      profile: profilePDA,
      authority: provider.wallet.publicKey,
      system_program: SystemProgram.programId
    }).rpc();
  });
});